import { LitElement, nothing, css, html, svg, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@material/mwc-icon-button';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-textfield';
import type { IconButtonToggle } from '@material/mwc-icon-button-toggle';

import { newEditEvent } from '@openscd/open-scd-core';

import { identity } from '@openenergytools/scl-lib';

import { sldSvg } from './foundation/sldSvg.js';
import {
  Point,
  attributes,
  sldNs,
  sldPrefix,
  svgNs,
  xlinkNs,
} from './foundation/sldUtil.js';
import { serviceColoring, svgConnectionGenerator } from './foundation/paths.js';
import { IED, Connection } from './foundation/types.js';

@customElement('communication-mapping-editor')
export class CommunicationMappingEditor extends LitElement {
  @property({ attribute: false })
  substation!: Element;

  @property({ type: Number })
  gridSize!: number;

  @property({ attribute: false })
  connections: Connection[] = [];

  @state()
  get ieds(): IED[] {
    return Array.from(
      this.substation.ownerDocument.querySelectorAll(':root > IED')
    ).map(ied => ({
      element: ied,
      name: ied.getAttribute('name')!,
    }));
  }

  @state() filterReport = false;

  @state() filterGOOSE = false;

  @state() filterSMV = false;

  @state() selectedIed?: Element;

  @state() filterRcv = false;

  @state() filterSend = false;

  @state() sourceIEDFilter = '';

  @state() targetIEDFilter = '';

  @state() cbNameFilter = '';

  @state() showFilterBox = false;

  @state() editMode = false;

  @state() showLabel = true;

  @state() placing?: Element;

  @state() placingLabel?: Element;

  @state() placingOffset: Point = [0, 0];

  @state() mouseX = 0;

  @state() mouseY = 0;

  @state() mouseX2 = 0;

  @state() mouseY2 = 0;

  @state()
  get idle(): boolean {
    return !(this.placing || this.placingLabel);
  }

  @query('svg#sldContainer')
  sld!: SVGGraphicsElement;

  @query('#container') container!: HTMLDivElement;

  svgCoordinates(clientX: number, clientY: number) {
    const p = new DOMPoint(clientX, clientY);
    const { x, y } = p.matrixTransform(this.sld.getScreenCTM()!.inverse());
    return [x, y].map(coord => Math.max(0, coord)) as Point;
  }

  reset() {
    this.placing = undefined;
    this.placingLabel = undefined;
  }

  placeLabel(element: Element, x: number, y: number) {
    this.dispatchEvent(
      newEditEvent({
        element,
        attributes: {
          [`${sldPrefix}:lx`]: { namespaceURI: sldNs, value: x.toString() },
          [`${sldPrefix}:ly`]: { namespaceURI: sldNs, value: y.toString() },
        },
      })
    );
    this.reset();
  }

  startPlacingLabel(element: Element | undefined, offset: Point = [0, 0]) {
    this.reset();
    this.placingLabel = element;
    this.placingOffset = offset;
  }

  placeElement(element: Element, x: number, y: number) {
    const {
      pos: [oldX, oldY],
      label: [oldLX, oldLY],
    } = attributes(element);

    const dx = x - oldX;
    const dy = y - oldY;

    const lx = oldLX;
    const ly = oldLY;

    const update = {
      element,
      attributes: {
        [`${sldPrefix}:x`]: { namespaceURI: sldNs, value: x.toString() },
        [`${sldPrefix}:y`]: { namespaceURI: sldNs, value: y.toString() },
        [`${sldPrefix}:lx`]: {
          namespaceURI: sldNs,
          value: (lx + dx).toString(),
        },
        [`${sldPrefix}:ly`]: {
          namespaceURI: sldNs,
          value: (ly + dy).toString(),
        },
      },
    };

    this.dispatchEvent(newEditEvent(update));

    this.reset();
  }

  startPlacing(element: Element | undefined, offset: Point = [0, 0]) {
    this.reset();
    this.placing = element;
    this.placingOffset = offset;
  }

  onWheelZoom(evt: WheelEvent): void {
    if (evt.ctrlKey) {
      evt.preventDefault();
      if (
        (evt.deltaY < 0 && this.gridSize >= 10) ||
        (evt.deltaY > 0 && this.gridSize <= 200)
      ) {
        const d = evt.deltaY < 0 ? -1 : 1;
        const f = (this.gridSize + d) / this.gridSize;

        const xs = this.container.scrollLeft;
        const xa = evt.offsetX;

        const dx = (f - 1) * (xs + xa);

        const ys = this.container.scrollTop;
        const ya = evt.offsetY - 57;

        const dy = (f - 1) * (ys + ya);

        this.container.scrollBy(dx, dy);
        this.gridSize += d;
      }
    }
  }

  filterCbName(conn: Connection): boolean {
    if (this.cbNameFilter === '') return false;

    const terms = this.cbNameFilter.split(' ');

    const iedName = conn.source.controlBlock.getAttribute('name')!;

    return !terms.some(term => iedName.includes(term));
  }

  filterTargetIED(conn: Connection): boolean {
    if (this.targetIEDFilter === '') return false;

    const terms = this.targetIEDFilter.split(' ');

    const iedName = conn.target.ied.getAttribute('name')!;

    return !terms.some(term => iedName.includes(term));
  }

  filterSourceIED(conn: Connection): boolean {
    if (this.sourceIEDFilter === '') return false;

    const terms = this.sourceIEDFilter.split(' ');

    const iedName = conn.source.ied.getAttribute('name')!;

    return !terms.some(term => iedName.includes(term));
  }

  filterConnections(conn: Connection) {
    const service =
      (conn.source.controlBlock.tagName === 'ReportControl' &&
        this.filterReport) ||
      (conn.source.controlBlock.tagName === 'GSEControl' && this.filterGOOSE) ||
      (conn.source.controlBlock.tagName === 'SampledValueControl' &&
        this.filterSMV);

    const ied =
      !!this.selectedIed &&
      conn.source.ied !== this.selectedIed &&
      conn.target.ied !== this.selectedIed;

    const source = this.filterSourceIED(conn);

    const target = this.filterTargetIED(conn);

    const cbName = this.filterCbName(conn);

    const receive = this.filterRcv && conn.source.ied === this.selectedIed;
    const send = this.filterSend && conn.target.ied === this.selectedIed;

    return !(service || ied || source || target || cbName || receive || send);
  }

  constructor() {
    super();

    this.addEventListener('wheel', this.onWheelZoom);
  }

  renderedLabelPosition(element: Element): Point {
    let {
      label: [x, y],
    } = attributes(element);
    const [offsetX, offsetY] = this.placingOffset;

    if (
      this.placing &&
      element.closest(this.placing.tagName) === this.placing
    ) {
      const {
        pos: [parentX, parentY],
      } = attributes(this.placing);
      x += this.mouseX - parentX - offsetX;
      y += this.mouseY - parentY - offsetY;
    }

    if (this.placingLabel === element) {
      x = this.mouseX2 - 0.5 - offsetX;
      y = this.mouseY2 + 0.5 - offsetY;
    }

    return [x, y];
  }

  renderLabel(element: Element) {
    const deg = 0;
    const text = element.getAttribute('name');
    const weight = 400;
    const color = 'black';
    const [x, y] = this.renderedLabelPosition(element);

    const fontSize = 0.45;
    let events = 'none';
    let handleClick: (() => void) | symbol = nothing;
    if (this.idle && this.editMode) {
      events = 'all';
      const offset = [this.mouseX2 - x - 0.5, this.mouseY2 - y + 0.5] as Point;
      handleClick = () => this.startPlacingLabel(element, offset);
    }
    const id = identity(element);
    const classes = classMap({
      label: true,
      ied: true,
    });
    return svg`<g class="${classes}" id="label:${id}"
                 transform="rotate(${deg} ${x + 0.5} ${y - 0.5})">
        <text x="${x + 0.1}" y="${y - 0.5}"
          alignment-baseline="central"
          @click=${handleClick}
          pointer-events="${events}" fill="${color}" font-weight="${weight}"
          font-size="${fontSize}px" font-family="Roboto, sans-serif"
          style="cursor: default;">
          ${text}
        </text>
      </g>`;
  }

  renderedPosition(element: Element): Point {
    let {
      pos: [x, y],
    } = attributes(element);
    if (
      this.placing &&
      element.closest(this.placing.tagName) === this.placing
    ) {
      const {
        pos: [parentX, parentY],
      } = attributes(this.placing);
      const [offsetX, offsetY] = this.placingOffset;
      x += this.mouseX - parentX - offsetX;
      y += this.mouseY - parentY - offsetY;
    }
    return [x, y];
  }

  renderIED(ied: IED) {
    const [x, y] = this.renderedPosition(ied.element);

    const symbol = 'IED';
    const icon = svg`<use href="#${symbol}" xlink:href="#${symbol}"
                pointer-events="none" />`;

    let handleClick: (() => void) | symbol = nothing;
    if (this.idle && this.editMode)
      handleClick = () => this.startPlacing(ied.element);
    else if (!this.editMode)
      handleClick = () => {
        if (this.selectedIed !== ied.element) this.selectedIed = ied.element;
        else this.selectedIed = undefined;
      };

    return svg`<svg
    xmlns="${svgNs}"
    xmlns:xlink="${xlinkNs}"
    id="${identity(ied.element)}"
    x="${x}"
    y="${y}"
    width="${1 * this.gridSize}"
    height="${1 * this.gridSize}"
    stroke-width="0.06"
    fill="none">
    <g class="ied"
      id="#${ied.name}"
      transform="translate(${0} ${0})">
        <title>${ied.name}</title>
        ${icon}
        <rect width="1" height="1" fill="none" pointer-events="all"
        @click=${handleClick}
        />
      </g></svg>`;
  }

  // eslint-disable-next-line class-methods-use-this
  renderFilterBox(): TemplateResult {
    if (!this.showFilterBox) return html``;

    return html`<div class="filter box" style="">
      <mwc-textfield
        class="filter input"
        label="Source IED name"
        value="${this.sourceIEDFilter}"
        @input="${(evt: Event) => {
          this.sourceIEDFilter = (evt.target as HTMLInputElement).value;
        }}"
      ></mwc-textfield>
      <mwc-textfield
        class="filter input"
        label="Target IED name"
        value="${this.targetIEDFilter}"
        @input="${(evt: Event) => {
          this.targetIEDFilter = (evt.target as HTMLInputElement).value;
        }}"
      ></mwc-textfield>
      <mwc-textfield
        class="filter input"
        label="Control Block name"
        value="${this.cbNameFilter}"
        @input="${(evt: Event) => {
          this.cbNameFilter = (evt.target as HTMLInputElement).value;
        }}"
      ></mwc-textfield>
    </div>`;
  }

  renderService(controlBlock: string): TemplateResult[] {
    return [
      html`<svg viewBox="0 0 25 25" width="25" height="25">
        <path
          d="M0,12.5L25,12.5"
          stroke-width="3"
          stroke="${serviceColoring[controlBlock]}"
        />
      </svg>`,
      html`<div class="serviceFilter">
        <input
          type="checkbox"
          id="serviceFilter"
          name="serviceFilter"
          checked
          @click="${(evt: Event) => {
            if (controlBlock === 'ReportControl')
              this.filterReport = !(evt.target as HTMLInputElement).checked;
            if (controlBlock === 'GSEControl')
              this.filterGOOSE = !(evt.target as HTMLInputElement).checked;
            if (controlBlock === 'SampledValueControl')
              this.filterSMV = !(evt.target as HTMLInputElement).checked;
          }}"
        />
        <label for="serviceFilter">${controlBlock}</label>
      </div>`,
    ];
  }

  renderInfoBox(): TemplateResult {
    const controlBlocks = [
      'ReportControl',
      'GSEControl',
      'SampledValueControl',
    ];

    return html`<div class="info-box">
      ${controlBlocks.map(controlBlock => this.renderService(controlBlock))}
      ${this.selectedIed && !this.editMode
        ? html`<svg viewBox="0 0 25 25" width="25" height="25">
              <path d="M0,12.5L22,12.5" stroke-width="3" stroke="black" />
              <path d="M25,12.5L12.5,18L12.5,7Z" stroke-width="1" />
            </svg>
            <input
              type="checkbox"
              checked
              @click="${(evt: Event) => {
                this.filterRcv = !(evt.target as HTMLInputElement).checked;
              }}"
            />
            <svg viewBox="0 0 25 25" width="25" height="25">
              <path d="M3,12.5L25,12.5" stroke-width="3" stroke="black" />
              <path d="M0,12.5L12.5,18L12.5,7Z" stroke-width="1" />
            </svg>
            <input
              type="checkbox"
              checked
              @click="${(evt: Event) => {
                this.filterSend = !(evt.target as HTMLInputElement).checked;
              }}"
            />`
        : nothing}
      <mwc-icon-button-toggle
        ?on=${this.editMode}
        onIcon="edit"
        offIcon="edit_off"
        @click="${(evt: Event) => {
          this.editMode = (evt.target as IconButtonToggle).on;
          this.selectedIed = undefined;
        }}"
      ></mwc-icon-button-toggle>
      <mwc-icon-button
        class="zoom"
        icon="zoom_in"
        title="Zoom in"
        @click="${() => {
          this.gridSize += 4;
        }}"
      >
      </mwc-icon-button>
      <mwc-icon-button
        class="zoom"
        icon="zoom_out"
        title="Zoom out"
        @click="${() => {
          this.gridSize -= 4;
        }}"
      >
      </mwc-icon-button>
      <mwc-icon-button-toggle
        ?on=${this.showLabel}
        onIcon="font_download"
        offIcon="font_download_off"
        @click="${(evt: Event) => {
          this.showLabel = (evt.target as IconButtonToggle).on;
        }}"
      ></mwc-icon-button-toggle>
      <mwc-icon-button-toggle
        ?on=${this.showFilterBox}
        onIcon="filter_list"
        offIcon="filter_list_off"
        @click="${(evt: Event) => {
          this.showFilterBox = (evt.target as IconButtonToggle).on;
        }}"
      ></mwc-icon-button-toggle>
    </div>`;
  }

  render() {
    const {
      dim: [w, h],
    } = attributes(this.substation);

    const placingLabelTarget = this.placingLabel
      ? svg`<rect width="100%" height="100%" fill="url(#halfgrid)"
      @click=${() => {
        const element = this.placingLabel!;
        const [x, y] = this.renderedLabelPosition(element);
        this.placeLabel(element, x, y);
      }} />`
      : nothing;

    const iedPlacingTarget =
      this.placing?.tagName === 'IED'
        ? svg`<rect width="100%" height="100%" fill="url(#grid)" 
        @click=${() => {
          const element = this.placing!;
          const [x, y] = this.renderedPosition(element);
          this.placeElement(element, x, y);
        }} />`
        : nothing;

    const filteredConnections = this.connections.filter(conn =>
      this.filterConnections(conn)
    );

    const svgConnection = svgConnectionGenerator(
      this.substation,
      filteredConnections
    );

    return html` ${this.renderInfoBox()}
      <div id="container">
        <style>
          ${this.showLabel ? nothing : `.label:not(.ied) {display: none} `}
        </style>
        <svg
          xmlns="${svgNs}"
          xmlns:xlink="${xlinkNs}"
          viewBox="0 0 ${w} ${h}"
          width="${w * this.gridSize}"
          height="${h * this.gridSize}"
          id="sldContainer"
          stroke-width="0.06"
          fill="none"
          @mousemove=${(e: MouseEvent) => {
            const [x, y] = this.svgCoordinates(e.clientX, e.clientY);
            this.mouseX = Math.floor(x);
            this.mouseY = Math.floor(y);
            this.mouseX2 = Math.round(x * 2) / 2;
            this.mouseY2 = Math.round(y * 2) / 2;
          }}
        >
          ${sldSvg(this.substation, this.gridSize)}
          ${this.ieds.map(ied => this.renderIED(ied))}
          ${this.ieds.map(ied => this.renderLabel(ied.element))}
          ${placingLabelTarget} ${iedPlacingTarget}
          ${filteredConnections.map(link => svgConnection(link))}
        </svg>
      </div>
      ${this.renderFilterBox()}`;
  }

  static styles = css`
    #container {
      width: 100%;
      height: 80vh;
      overflow: scroll;
      background-color: white;
    }

    g.equipment {
      opacity: 0.2;
    }

    g.node {
      opacity: 0.2;
    }

    g.transformer {
      opacity: 0.2;
    }

    g.label:not(.ied) {
      opacity: 0.2;
    }

    svg.connection:hover > path {
      stroke: black;
      stroke-width: 0.12;
    }

    .info-box {
      display: flex;
      align-items: center;
    }

    .info-box > svg {
      padding-left: 15px;
    }

    .info-box > .serviceFilter > label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
    }

    .filter {
      padding: 10px;
    }

    .filter.box {
      width: 250px;
      height: 230px;
      position: fixed;
      bottom: 5px;
      right: 5px;
      border: 2px solid;
      background-color: var(--oscd-theme-base3);
      border-radius: 5px;
    }
  `;
}
