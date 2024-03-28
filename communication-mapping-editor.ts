import { LitElement, nothing, css, html, svg } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// eslint-disable-next-line import/no-extraneous-dependencies
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
import { svgConnectionGenerator } from './foundation/paths.js';
import { IED, Connection } from './foundation/types.js';

@customElement('communication-mapping-editor')
export class CommunicationMappingEditor extends LitElement {
  @property({ attribute: false })
  substation!: Element;

  @property({ type: Number })
  gridSize!: number;

  @state()
  get ieds(): IED[] {
    return Array.from(
      this.substation.ownerDocument.querySelectorAll(':root > IED')
    ).map(ied => ({
      element: ied,
      name: ied.getAttribute('name')!,
    }));
  }

  @property({ attribute: false })
  placing?: Element;

  @property({ attribute: false })
  placingLabel?: Element;

  @property({ attribute: false })
  placingOffset: Point = [0, 0];

  @state()
  mouseX = 0;

  @state()
  mouseY = 0;

  @state()
  mouseX2 = 0;

  @state()
  mouseY2 = 0;

  @state()
  get idle(): boolean {
    return !(this.placing || this.placingLabel);
  }

  @state()
  links: Connection[] = [];

  @query('svg#sldContainer')
  sld!: SVGGraphicsElement;

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
    if (this.idle) {
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
    if (this.idle) handleClick = () => this.startPlacing(ied.element);

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

    const svgConnection = svgConnectionGenerator(this.substation, this.links);

    return html`<div id="container">
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
        ${this.links.map(link => svgConnection(link))}
      </svg>
    </div>`;
  }

  static styles = css`
    #container {
      position: absolute;
      width: 100%;
      height: 100%;
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
  `;
}
