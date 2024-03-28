import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

import { identity } from '@openenergytools/scl-lib';

import './communication-mapping-editor.js';

import { Connection } from './foundation/types.js';

function clientLnConnections(doc: XMLDocument): Connection[] {
  const reportControlRoot = ':root > IED > AccessPoint > Server > LDevice';

  return Array.from(
    doc.querySelectorAll(
      `${reportControlRoot} > LN0 > ReportControl, ${reportControlRoot} > LN > ReportControl`
    )
  ).flatMap(sourceCb => {
    const sourceIed = sourceCb.closest('IED')!;

    const sortedClientLns: Record<string, { ied: Element; inputs: Element[] }> =
      {};
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
  });
}

export default class SlcCommunicationEditor extends LitElement {
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

  render() {
    if (!this.substation) return html`<main>No substation section</main>`;

    return html`<main>
      <communication-mapping-editor
        .substation=${this.substation}
        .gridSize=${this.gridSize}
        .links=${[...clientLnConnections(this.substation.ownerDocument)]}
      ></communication-mapping-editor>
    </main>`;
  }

  static styles = css`
    main {
      width: 100%;
      height: 100%;
    }
  `;
}
