/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-return-assign */
import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';

import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';

import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';
import { MdList } from '@scopedelement/material-web/list/MdList.js';
import { MdListItem } from '@scopedelement/material-web/list/MdListItem.js';

import { newEditEvent } from '@openenergytools/open-scd-core';

import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
import type { ActionItem } from '@openenergytools/filterable-lists/dist/ActionList.js';

import {
  controlBlockGseOrSmv,
  identity,
  unsubscribe,
} from '@openenergytools/scl-lib';

import { Connection } from './foundation/types.js';
import {
  getExistingSupervision,
  inputReference,
  inputSupportingText,
  isSubscribed,
} from './foundation/utils.js';

import { CommunicationMappingEditor } from './communication-mapping-editor.js';
import {
  gseControlPath,
  iconFromPath,
  logControlPath,
  reportControlPath,
  sampledValueControlPath,
} from './foundation/icons.js';

type SelectConnectionEvent = CustomEvent<Connection>;

const icons = {
  LogControl: iconFromPath(logControlPath),
  ReportControl: iconFromPath(reportControlPath),
  SampledValueControl: iconFromPath(sampledValueControlPath),
  GSEControl: iconFromPath(gseControlPath),
};

function combineSelectors<T>(...selectors: T[][]): string {
  return selectors
    .reduce<T[][]>(
      (a, b) => <T[][]>a.flatMap(d => b.map(e => [d, e].flat())),
      [[]]
    )
    .map(str => str.join(''))
    .join(',');
}

function clientLnConnections(doc: XMLDocument): Connection[] {
  const controlBlockSelector = combineSelectors(
    [':root > IED > AccessPoint > Server > LDevice'],
    ['>'],
    ['LN0', 'LN'],
    ['>'],
    ['ReportControl']
  );

  return Array.from(doc.querySelectorAll(controlBlockSelector)).flatMap(
    sourceCb => {
      const sourceIed = sourceCb.closest('IED')!;

      const sortedClientLns: Record<
        string,
        { ied: Element; inputs: Element[] }
      > = {};
      sourceCb
        .querySelectorAll(':scope > RptEnabled > ClientLN')
        .forEach(clientLn => {
          const targetIed = doc.querySelector(
            `:root > IED[name="${clientLn.getAttribute('iedName')}"`
          );
          const targetIedName = targetIed?.getAttribute('name');
          if (!targetIed || !targetIedName) return;
          if (sortedClientLns[targetIedName])
            sortedClientLns[targetIedName].inputs.push(clientLn);
          else
            sortedClientLns[targetIedName] = {
              ied: targetIed,
              inputs: [clientLn],
            };
        });

      return Object.values(sortedClientLns).map(target => {
        const id = `${identity(sourceCb)}${identity(target.ied)}`;

        return {
          id,
          source: { ied: sourceIed, controlBlock: sourceCb },
          target,
        };
      });
    }
  );
}

function parseExtRefs(doc: XMLDocument): Connection[] {
  const controlBlockSelector = combineSelectors(
    [':root > IED > AccessPoint > Server > LDevice'],
    ['>'],
    ['LN0'],
    ['>'],
    ['GSEControl', 'SampledValueControl']
  );

  return Array.from(doc.querySelectorAll(controlBlockSelector)).flatMap(
    controlBlock => {
      const sourceIed = controlBlock.closest('IED')!;
      const iedName = sourceIed!.getAttribute('name');
      const ldInst = controlBlock.closest('LDevice')!.getAttribute('inst');
      const anyLn = controlBlock.closest('LN,LN0')!;
      const prefix = anyLn!.getAttribute('prefix');
      const lnClass = anyLn!.getAttribute('lnClass');
      const lnInst = anyLn!.getAttribute('inst');
      const cbName = controlBlock.getAttribute('name');

      const extRefSelector = combineSelectors(
        [':root > IED > AccessPoint > Server > LDevice'],
        ['>'],
        ['LN0', 'LN'],
        ['>'],
        [
          `Inputs > ExtRef[iedName="${iedName}"][srcLNClass="${lnClass}"][srcCBName="${cbName}"]`,
        ]
      );

      const targetMap: Record<string, { ied: Element; inputs: Element[] }> = {};

      Array.from(doc.querySelectorAll(extRefSelector))
        .filter(extRef => {
          const [extRefLdInst, srcLDInst, srcPrefix, srcLNInst] = [
            'ldInst',
            'srcLDInst',
            'srcPrefix',
            'srcLNInst',
          ].map(attr => extRef.getAttribute(attr));

          return (
            (srcLDInst ? srcLDInst === ldInst : extRefLdInst === srcLDInst) &&
            (srcPrefix ?? '') === (prefix ?? '') &&
            (srcLNInst ?? '') === (lnInst ?? '')
          );
        })
        .forEach(extRef => {
          const target = extRef.closest('IED');
          const targetName = target!.getAttribute('name');
          if (targetName && targetMap[targetName])
            targetMap[targetName].inputs.push(extRef);
          else if (targetName)
            targetMap[targetName] = { ied: target!, inputs: [extRef] };
        });

      return Object.values(targetMap).map(target => {
        const id = `${identity(controlBlock)}${target.ied}`;
        return { id, source: { ied: sourceIed, controlBlock }, target };
      });
    }
  );
}

function connectionHeading(conn: Connection): string {
  const sourceIedName = conn.source.ied.getAttribute('name');
  const cbName = conn.source.controlBlock.getAttribute('name');
  const targetIedName = conn.target.ied.getAttribute('name');
  return `${sourceIedName}:${cbName} ⮕ ${targetIedName}`;
}

export default class SldCommunicationEditor extends ScopedElementsMixin(
  LitElement
) {
  static scopedElements = {
    'md-icon': MdIcon,
    'md-dialog': MdDialog,
    'md-text-button': MdTextButton,
    'md-list': MdList,
    'md-list-item': MdListItem,
    'communication-mapping-editor': CommunicationMappingEditor,
    'action-list': ActionList,
    'mwc-button': customElements.get('mwc-button'),
    'mwc-icon': customElements.get('mwc-icon'),
    'mwc-list': customElements.get('mwc-list'),
    'mwc-list-item': customElements.get('mwc-list-item'),
  };

  @property({ attribute: false })
  doc?: XMLDocument;

  @property({ attribute: false })
  get substation(): Element | null {
    return this.doc?.querySelector(':root > Substation') ?? null;
  }

  @state()
  gridSize = 32;

  @property({ type: Number })
  editCount = -1;

  @state()
  selectedConnection?: Connection;

  @query('#mappingDetails') mappingDetails!: MdDialog;

  removeInputs(inputs: Element[]): void {
    const removeClientLNs = inputs
      .filter(input => input.tagName === 'ClientLN')
      .map(clientLn => ({ node: clientLn }));

    const removeExtRefs = unsubscribe(
      inputs.filter(input => input.tagName === 'ExtRef')
    );

    const edits = [...removeClientLNs, ...removeExtRefs];

    if (edits.length > 0) this.dispatchEvent(newEditEvent(edits));
  }

  removeAllInputs(): void {
    const inputs = this.selectedConnection?.target.inputs ?? [];
    this.removeInputs(inputs);

    this.requestUpdate();
  }

  // eslint-disable-next-line class-methods-use-this
  getCommunicationDetails(connection: Connection | undefined): TemplateResult {
    if (!connection?.source?.controlBlock)
      return html`<p>No connection selected</p>`;

    const cb = connection.source.controlBlock;
    const comm = controlBlockGseOrSmv(cb);

    const vlan = comm?.querySelector(
      'Address > P[type="VLAN-ID"]'
    )?.textContent;
    const vlanPriority = comm?.querySelector(
      'Address > P[type="VLAN-PRIORITY"]'
    )?.textContent;
    const appID = comm?.querySelector('Address > P[type="APPID"]')?.textContent;
    const macAddress = comm?.querySelector(
      'Address > P[type="MAC-Address"]'
    )?.textContent;
    const minTime = comm?.querySelector('MinTime')?.textContent;
    const maxTime = comm?.querySelector('MaxTime')?.textContent;

    const dataSet = cb.getAttribute('datSet');
    const confRev = cb.getAttribute('confRev');
    const smvID = cb.getAttribute('smvID');

    return html`<table id="comDetails">
      <tbody>
        ${smvID
          ? html`<tr>
              <td>SMV ID</td>
              <td>${smvID}</td>
            </tr>`
          : null}
        ${dataSet
          ? html`<tr>
              <td>Data Set</td>
              <td>${dataSet}</td>
            </tr>`
          : null}
        ${confRev
          ? html`<tr>
              <td>Configuration Revision</td>
              <td>${confRev}</td>
            </tr>`
          : null}
        ${vlan
          ? html`<tr>
              <td>VLAN ID</td>
              <td>0x${vlan} (${parseInt(vlan, 16).toString()})</td>
            </tr>`
          : null}
        ${vlanPriority
          ? html`<tr>
              <td>VLAN Priority</td>
              <td>${vlanPriority}</td>
            </tr>`
          : null}
        ${appID
          ? html`<tr>
              <td>Application ID</td>
              <td>${appID}</td>
            </tr>`
          : null}
        ${macAddress
          ? html`<tr>
              <td>MAC Address</td>
              <td>${macAddress}</td>
            </tr>`
          : null}
        ${minTime
          ? html`<tr>
              <td>Minimum Time</td>
              <td>${minTime}</td>
            </tr>`
          : null}
        ${maxTime
          ? html`<tr>
              <td>Maximum Time</td>
              <td>${maxTime}</td>
            </tr>`
          : null}
      </tbody>
    </table>`;
  }

  renderSubscription(): TemplateResult {
    const heading = this.selectedConnection
      ? connectionHeading(this.selectedConnection)
      : 'No connection selected';

    const fcdaItems: ActionItem[] = [];
    const extRefItems: ActionItem[] = [];

    this.selectedConnection?.target.inputs
      .filter(input => isSubscribed(input))
      .forEach(input => {
        const fcdaInfo = inputReference(input);
        const extRefInfo = inputSupportingText(input);

        fcdaItems.push({
          headline: fcdaInfo.fcdaRef,
          supportingText: fcdaInfo.desc,
          endingIcon: 'arrow_forward',
        });

        extRefItems.push({
          headline: extRefInfo.extRefRef,
          supportingText: extRefInfo.desc,
        });
      });

    let supervisionId: string | null = null;
    let supervisionDesc: string | null = null;

    if (this.selectedConnection) {
      const { controlBlock } = this.selectedConnection.source;
      const { ied } = this.selectedConnection.target;

      const supervision = getExistingSupervision(controlBlock, ied);

      if (supervision) {
        const supervisionType =
          controlBlock.tagName === 'GSEControl' ? 'LGOS' : 'LSVS';
        const refSelector =
          supervisionType === 'LGOS'
            ? 'DOI[name="GoCBRef"]'
            : 'DOI[name="SvCBRef"]';

        supervisionDesc =
          supervision?.getAttribute('desc') ??
          supervision
            .querySelector(`:scope > ${refSelector}`)
            ?.getAttribute('desc') ??
          null;
        identity(supervision);
        supervisionId = `${identity(supervision)}`.substring(
          ied.getAttribute('name')!.length + 2
        );
      }
    }

    const content = html`<div slot="content">
      ${supervisionId
        ? html`<p id="supervisionInfo">
            <md-icon id="supIcon">monitor_heart</md-icon>Supervision:
            ${supervisionId}${supervisionDesc
              ? html` (${supervisionDesc})`
              : ''}
          </p>`
        : null}
      <details>
        <summary>Message Information</summary>
        ${this.getCommunicationDetails(this.selectedConnection)}
      </details>
      <div id="lists">
        <action-list
          class="vertical-list"
          .items=${fcdaItems}
          height="72"
        ></action-list>
        <action-list
          class="vertical-list"
          .items=${extRefItems}
          height="72"
        ></action-list>
      </div>
    </div>`;

    const cbType = this.selectedConnection?.source.controlBlock.tagName;

    return html`<md-dialog id="mappingDetails">
      <div slot="headline">
        <md-icon>${cbType ? icons[cbType as keyof typeof icons] : ''}</md-icon
        >${heading}
      </div>
      ${content}
      <div slot="actions">
        <md-text-button
          class="warning"
          @click=${() => {
            this.removeAllInputs();
            this.mappingDetails.close();
          }}
          >Remove All<md-icon class="warning" slot="icon"
            >delete_forever</md-icon
          ></md-text-button
        >
        <md-text-button @click=${() => this.mappingDetails.close()}
          >Close</md-text-button
        >
      </div>
    </md-dialog>`;
  }

  render() {
    if (!this.substation) return html`<main>No substation section</main>`;

    return html`<main>
      <communication-mapping-editor
        .substation=${this.substation}
        .gridSize=${this.gridSize}
        .connections=${[
          ...clientLnConnections(this.substation.ownerDocument),
          ...parseExtRefs(this.substation.ownerDocument),
        ]}
        @select-connection="${(evt: SelectConnectionEvent) => {
          this.selectedConnection = evt.detail;
          this.mappingDetails.show();
        }}"
      ></communication-mapping-editor>
      ${this.renderSubscription()}
    </main>`;
  }

  static styles = css`
    main {
      width: 100%;
      height: 100%;
    }

    * {
      --md-sys-color-primary: var(--oscd-primary);
      --md-sys-color-secondary: var(--oscd-secondary);
      --md-sys-typescale-body-large-font: var(--oscd-theme-text-font);
      --md-outlined-text-field-input-text-color: var(--oscd-base01);

      --md-sys-color-surface: var(--oscd-base3);
      --md-sys-color-on-surface: var(--oscd-base00);
      --md-sys-color-on-primary: var(--oscd-base2);
      --md-sys-color-on-surface-variant: var(--oscd-base00);
      --md-menu-container-color: var(--oscd-base3);
      --md-sys-color-surface-container-highest: var(--oscd-base2);
      --mdc-icon-font: 'Material Symbols Outlined';
    }

    #mappingDetails {
      width: auto;
      max-width: max-content;
      min-width: min-content;
    }

    #lists {
      display: flex;
    }

    .vertical-list {
      flex: 1;
      z-index: 2;
    }

    .warning {
      color: var(--oscd-error, red);
      --md-sys-color-primary: var(--oscd-error, red);
    }

    .arrow {
      height: 72px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-family: Arial, sans-serif;
      font-size: 12px;
      padding: 4px;
    }

    td {
      padding: 4px 8px;
      border: 1px solid var(--oscd-base-3, #f9f9f9);
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: var(--oscd-base-2, #f9f9f9);
    }

    details {
      margin: 8px;
    }

    #comDetails {
      width: auto;
    }

    #supervisionInfo {
      display: flex;
      align-items: center;
      margin: 0px;
      border: 0px;
    }

    #supIcon {
      display: inline-block;
      padding: 10px;
    }

    div[slot='headline'] {
      padding-top: 12px;
      padding-left: 12px;
      padding-bottom: 0px;
    }

    div[slot='content'] {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  `;
}
