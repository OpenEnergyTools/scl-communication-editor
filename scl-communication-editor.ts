import { css, html, LitElement, TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';

import {
  ActionItem,
  ActionList,
} from '@openenergytools/filterable-lists/dist/ActionList.js';

import { newEditEvent } from '@openscd/open-scd-core';

import { identity, unsubscribe } from '@openenergytools/scl-lib';

import { CommunicationSclEditor } from './CommunicationSclEditor.js';

import { Connection } from './foundation/types.js';
import {
  inputReference as inputReferenceHeadline,
  inputSupportingText,
} from './foundation/utils.js';

type SelectConnectionEvent = CustomEvent<Connection>;

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
  return `${sourceIedName}:${cbName} ->${targetIedName}`;
}

export default class SlcCommunicationEditor extends ScopedElementsMixin(
  LitElement
) {
  static scopedElements = {
    'communication-scl-editor': CommunicationSclEditor,
    'md-dialog': MdDialog,
    'action-list': ActionList,
    'md-text-button': MdTextButton,
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

  @query('md-dialog') removeSelection!: MdDialog;

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

  renderRemoveDialog(): TemplateResult {
    const heading = this.selectedConnection
      ? connectionHeading(this.selectedConnection)
      : 'No connection selected';

    const items: ActionItem[] = this.selectedConnection
      ? this.selectedConnection.target.inputs.map(input => ({
          headline: inputReferenceHeadline(input),
          supportingText: inputSupportingText(input),
        }))
      : [];

    const content = html`<action-list
      style="min-width: min-content;"
      filterable
      .items=${items}
    ></action-list>`;

    return html`<md-dialog>
      <div slot="headline">${heading}</div>
      <form slot="content" id="form-id" method="dialog">${content}</form>
      <div slot="actions">
        <md-text-button
          style="--mdc-theme-primary: var(--oscd-error)"
          @click="${() => {
            this.removeSelection.close();
          }}"
          >discard</md-text-button
        >
        <md-text-button
          @click="${() => {
            this.removeSelection.close();
            this.removeAllInputs();
          }}"
        >
          remove all
        </md-text-button>
      </div>
    </md-dialog>`;
  }

  render() {
    if (!this.substation) return html`<main>No substation section</main>`;

    return html`<main>
      <communication-scl-editor
        .substation=${this.substation}
        .gridSize=${this.gridSize}
        .connections=${[
          ...clientLnConnections(this.substation.ownerDocument),
          ...parseExtRefs(this.substation.ownerDocument),
        ]}
        @select-connection="${(evt: SelectConnectionEvent) => {
          this.selectedConnection = evt.detail;
          this.removeSelection.show();
        }}"
      ></communication-scl-editor>
      ${this.renderRemoveDialog()}
    </main>`;
  }

  static styles = css`
    main {
      width: 100%;
      height: 100%;
    }

    md-dialog {
      --md-dialog-container-max-height: 100%;
      --md-dialog-container-max-width: 100%;
    }

    * {
      --md-sys-color-primary: var(--oscd-primary);
      --md-sys-color-secondary: var(--oscd-secondary);
      --md-sys-typescale-body-large-font: var(--oscd-theme-text-font);

      --md-sys-color-surface: var(--oscd-base3);
      --md-sys-color-on-surface: var(--oscd-base00);
      --md-sys-color-on-primary: var(--oscd-base2);
      --md-sys-color-on-surface-variant: var(--oscd-base00);
      --md-menu-container-color: var(--oscd-base3);
      font-family: var(--oscd-theme-text-font);
      --md-sys-color-surface-container-highest: var(--oscd-base2);
      --md-fab-container-color: var(--oscd-secondary);
    }
  `;
}
