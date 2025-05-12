import { fixture, html } from '@open-wc/testing';

import { sendKeys, sendMouse, setViewport } from '@web/test-runner-commands';

import { visualDiff } from '@web/test-runner-visual-regression';

import { commScd, lNodeConn, scd, ssd } from './testfiles.js';

import SlcCommunicationEditor from './scl-communication-editor.js';

const factor = window.process && process.env.CI ? 6 : 3;
function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * factor);
  });
}
mocha.timeout(2000 * factor);

customElements.define('scl-communication-editor', SlcCommunicationEditor);

const pureSSD = new DOMParser().parseFromString(ssd, 'application/xml');
const docWithIED = new DOMParser().parseFromString(scd, 'application/xml');
const docComm = new DOMParser().parseFromString(commScd, 'application/xml');
const docLNode = new DOMParser().parseFromString(lNodeConn, 'application/xml');

function wheel(editor: SlcCommunicationEditor, type: 'in' | 'out'): void {
  const wheelEvent = new WheelEvent('wheel', {
    deltaY: type === 'in' ? 1 : -1,
    screenX: 300,
    screenY: 200,
    ctrlKey: true,
  });

  editor.shadowRoot
    ?.querySelector('communication-scl-editor')
    ?.dispatchEvent(wheelEvent);
}

describe('scl-communication-editor', () => {
  let div: HTMLDivElement;

  beforeEach(() => {
    document.body.style.width = '100%';
    document.body.style.height = '100%';

    div = document.createElement('div');
    document.body.prepend(div);
  });

  describe('without SCL loaded', () => {
    let editor: SlcCommunicationEditor;
    beforeEach(async () => {
      editor = await fixture(
        html`<scl-communication-editor></scl-communication-editor>`
      );

      div.prepend(editor);
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await editor.updateComplete;
      await timeout(200);
      await visualDiff(editor, `#1 without Substation loaded`);
    });
  });

  describe('with pure SSD loaded', () => {
    let editor: SlcCommunicationEditor;
    beforeEach(async () => {
      editor = await fixture(
        html`<scl-communication-editor
          .doc=${pureSSD}
        ></scl-communication-editor>`
      );
      div.prepend(editor);

      await setViewport({ width: 1400, height: 1000 });
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await editor.updateComplete;
      await timeout(200);
      await visualDiff(editor, `#2 without any IEDs loaded`);
    });
  });

  describe('in edit mode', () => {
    let editor: SlcCommunicationEditor;
    beforeEach(async () => {
      editor = await fixture(
        html`<scl-communication-editor
          .doc=${docWithIED}
        ></scl-communication-editor>`
      );
      div.prepend(editor);

      await setViewport({ width: 800, height: 600 });
      await sendMouse({ type: 'click', position: [530, 30] });
    });

    afterEach(async () => {
      editor.remove();
    });

    it('per default looks like the latest snapshot', async () => {
      await editor.updateComplete;
      await timeout(200);
      await visualDiff(editor, `#3 with IEDs loaded`);
    });

    it('clicked on an IED looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [150, 190] });
      await sendMouse({ type: 'click', position: [150, 190] });

      await timeout(200);
      await visualDiff(editor, `#4 clicked on an IED`);
    });

    it('clicked and moved an IED looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [150, 190] });
      await sendMouse({ type: 'click', position: [150, 190] });

      await sendMouse({ type: 'move', position: [150, 160] });

      await timeout(200);

      await visualDiff(editor, `#5 clicked and move selected IED`);
    });

    it('release selected IED looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [150, 190] });
      await sendMouse({ type: 'click', position: [150, 190] });

      await sendMouse({ type: 'move', position: [150, 160] });
      await sendMouse({ type: 'click', position: [150, 160] });

      await timeout(200);

      await visualDiff(editor, `#6 release selected IED`);
    });

    it('clicked on an IED label looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [180, 190] });
      await sendMouse({ type: 'click', position: [180, 190] });

      await timeout(300);
      await visualDiff(editor, `#7 clicked on an IED label`);
    });

    it('clicked and moved an IED label looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [180, 190] });
      await sendMouse({ type: 'click', position: [180, 190] });

      await sendMouse({ type: 'move', position: [180, 165] });

      await timeout(300);

      await visualDiff(editor, `#8 clicked and move selected IED label`);
    });

    it('release selected IED label looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [180, 190] });
      await sendMouse({ type: 'click', position: [180, 190] });

      await sendMouse({ type: 'move', position: [180, 165] });
      await sendMouse({ type: 'click', position: [180, 165] });

      await timeout(300);

      await visualDiff(editor, `#9 release selected IED label`);
    });
  });

  describe('with communication services included', () => {
    describe('without any interaction', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docComm}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 1200, height: 800 });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('per default looks like the latest snapshot', async () => {
        await editor.updateComplete;
        await timeout(200);
        await visualDiff(editor, `#10 connections rendered`);
      });
    });

    describe('with move hover over connection', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docComm}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 1200, height: 800 });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('per default looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'move', position: [241, 198] });

        await timeout(200);

        await visualDiff(editor, `#11 connection highlight with hover`);
      });
    });

    describe('with filtered ReportControl', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docComm}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 1200, height: 800 });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('per default looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [75, 23] });

        await timeout(200);

        await visualDiff(editor, `#12 filtered ReportControl connections`);
      });
    });

    describe('with filtered GSEControl', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docComm}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 1200, height: 800 });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('per default looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [212, 25] });

        await timeout(200);

        await visualDiff(editor, `#13 filtered GSEControl connections`);
      });
    });

    describe('with filtered SampledValueControl', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docComm}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 1200, height: 800 });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('per default looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [358, 25] });

        await timeout(200);

        await visualDiff(
          editor,
          `#14 filtered SampledValueControl connections`
        );
      });
    });
  });

  describe('has zoom capabilities', () => {
    let editor: SlcCommunicationEditor;
    beforeEach(async () => {
      editor = await fixture(
        html`<scl-communication-editor
          .doc=${pureSSD}
        ></scl-communication-editor>`
      );
      div.prepend(editor);

      await setViewport({ width: 1400, height: 1000 });
    });

    afterEach(async () => {
      editor.remove();
    });

    it('on zoom in button click looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [580, 24] });

      await timeout(200);
      await visualDiff(editor, `#15 on zoom in button`);
    });

    it('on zoom out button click looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [630, 24] });

      await timeout(200);
      await visualDiff(editor, `#16 on zoom out button`);
    });

    it('on wheel zoom in looks like the latest snapshot', async () => {
      await editor.updateComplete;

      wheel(editor, 'in');
      wheel(editor, 'in');
      wheel(editor, 'in');
      wheel(editor, 'in');
      wheel(editor, 'in');
      wheel(editor, 'in');

      await timeout(200);
      await visualDiff(editor, `#17 on wheel zoom in `);
    });

    it('on wheel zoom in looks like the latest snapshot', async () => {
      await editor.updateComplete;

      wheel(editor, 'out');
      wheel(editor, 'out');
      wheel(editor, 'out');
      wheel(editor, 'out');
      wheel(editor, 'out');
      wheel(editor, 'out');

      await timeout(200);
      await visualDiff(editor, `#18 on wheel zoom out`);
    });
  });

  describe('with selected IED', () => {
    let editor: SlcCommunicationEditor;

    describe('in a zero line view', () => {
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docComm}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 1200, height: 800 });

        await sendMouse({ type: 'click', position: [172, 220] });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('per default looks like the latest snapshot', async () => {
        await editor.updateComplete;
        await timeout(200);
        await visualDiff(editor, `#19 filter on IED select`);
      });

      it('with filtered receiving messages looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [577, 24] });

        await timeout(200);

        await visualDiff(editor, `#20 filter receiving messages`);
      });

      it('with filtered sending messages looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [638, 24] });

        await timeout(200);

        await visualDiff(editor, `#20 filter sending messages`);
      });

      it('with filtered sending and receiving messages looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [577, 24] });
        await sendMouse({ type: 'click', position: [638, 24] });

        await timeout(200);

        await visualDiff(editor, `#21 filter sending and receiving messages`);
      });

      it('with IEd unselcted looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [172, 220] });

        await timeout(200);

        await visualDiff(editor, `#22 un done IED selection`);
      });
    });

    describe('in a SLD view', () => {
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docLNode}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 600, height: 800 });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('and BCU selected selected looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [270, 150] });

        await timeout(200);
        await visualDiff(editor, `#31 BCU selected`);
      });

      it('and MU selected selected looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [270, 330] });

        await timeout(200);
        await visualDiff(editor, `#32 MU selected`);
      });
    });
  });

  describe('allows to disable equipment labels', () => {
    let editor: SlcCommunicationEditor;
    beforeEach(async () => {
      editor = await fixture(
        html`<scl-communication-editor
          .doc=${pureSSD}
        ></scl-communication-editor>`
      );
      div.prepend(editor);

      await setViewport({ width: 1400, height: 1000 });
    });

    afterEach(async () => {
      editor.remove();
    });

    it('looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [660, 24] });

      await timeout(200);
      await visualDiff(editor, `#23 allows to disable equipment labels`);
    });
  });

  describe('has a remove connection dialog', () => {
    describe('with connection click', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docComm}
          ></scl-communication-editor>`
        );
        div.prepend(editor);

        await setViewport({ width: 1200, height: 800 });
      });

      afterEach(async () => {
        editor.remove();
      });

      it('for ExtRef type inputs looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [241, 198] });

        await editor.updateComplete;
        await timeout(200);

        await visualDiff(editor, `#24 remove dialog for GOOSE connection`);
      });

      it('for ClientLNs type inputs looks like the latest snapshot', async () => {
        await editor.updateComplete;

        await sendMouse({ type: 'click', position: [516, 424] });

        await editor.updateComplete;
        await timeout(200);

        await visualDiff(editor, `#25 remove dialog for Report connection`);
      });
    });
  });

  describe('has advanced filter options', () => {
    let editor: SlcCommunicationEditor;
    beforeEach(async () => {
      editor = await fixture(
        html`<scl-communication-editor
          .doc=${docComm}
        ></scl-communication-editor>`
      );
      div.prepend(editor);

      await setViewport({ width: 1200, height: 800 });

      await sendMouse({ type: 'click', position: [1160, 760] });
    });

    afterEach(async () => {
      editor.remove();
    });

    it('on source IED name looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [1100, 600] });
      await sendKeys({ type: 's33' });

      await timeout(200);
      await visualDiff(editor, `#26 filter source IED name`);
    });

    it('on target IED name looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [1100, 660] });
      await sendKeys({ type: 't5' });

      await timeout(200);
      await visualDiff(editor, `#27 filter target IED name`);
    });

    it('on control block IED name looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [1100, 740] });
      await sendKeys({ type: 'gse3' });

      await timeout(200);
      await visualDiff(editor, `#28 filter control block name`);
    });

    it('indicates active filter looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [1100, 740] });
      await sendKeys({ type: 'gse3' });
      await sendMouse({ type: 'click', position: [1160, 540] });

      await timeout(200);
      await visualDiff(editor, `#29 active filter indication`);
    });

    it('on filter clear looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'click', position: [1100, 740] });
      await sendKeys({ type: 'gse3' });
      await sendMouse({ type: 'click', position: [1160, 540] });
      await sendMouse({ type: 'click', position: [1100, 760] });

      await timeout(200);
      await visualDiff(editor, `#30 clear filter`);
    });
  });
});
