import { fixture, html } from '@open-wc/testing';

import { sendMouse, setViewport } from '@web/test-runner-commands';

import { visualDiff } from '@web/test-runner-visual-regression';

import { rpScd, scd, ssd } from './testfiles.js';

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
const docRp = new DOMParser().parseFromString(rpScd, 'application/xml');

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

  describe('without pure SSD loaded', () => {
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

  describe('with pure SCD loaded', () => {
    let editor: SlcCommunicationEditor;
    beforeEach(async () => {
      editor = await fixture(
        html`<scl-communication-editor
          .doc=${docWithIED}
        ></scl-communication-editor>`
      );
      div.prepend(editor);

      await setViewport({ width: 800, height: 600 });
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

      await sendMouse({ type: 'move', position: [150, 155] });
      await sendMouse({ type: 'click', position: [150, 155] });

      await timeout(200);
      await visualDiff(editor, `#4 clicked on an IED`);
    });

    it('clicked and moved an IED looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [150, 155] });
      await sendMouse({ type: 'click', position: [150, 155] });

      await sendMouse({ type: 'move', position: [150, 120] });

      await timeout(200);

      await visualDiff(editor, `#5 clicked and move selected IED`);
    });

    it('release selected IED looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [150, 155] });
      await sendMouse({ type: 'click', position: [150, 155] });

      await sendMouse({ type: 'move', position: [150, 120] });
      await sendMouse({ type: 'click', position: [150, 120] });

      await timeout(200);

      await visualDiff(editor, `#6 release selected IED`);
    });

    it('clicked on an IED label looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [180, 145] });
      await sendMouse({ type: 'click', position: [180, 145] });

      await timeout(300);
      await visualDiff(editor, `#7 clicked on an IED label`);
    });

    it('clicked and moved an IED label looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [180, 145] });
      await sendMouse({ type: 'click', position: [180, 145] });

      await sendMouse({ type: 'move', position: [180, 120] });

      await timeout(300);

      await visualDiff(editor, `#8 clicked and move selected IED label`);
    });

    it('release selected IED label looks like the latest snapshot', async () => {
      await editor.updateComplete;

      await sendMouse({ type: 'move', position: [180, 145] });
      await sendMouse({ type: 'click', position: [180, 145] });

      await sendMouse({ type: 'move', position: [180, 120] });
      await sendMouse({ type: 'click', position: [180, 120] });

      await timeout(300);

      await visualDiff(editor, `#9 release selected IED label`);
    });
  });

  describe('with report control type SCD loaded', () => {
    describe('without any interaction', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docRp}
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
        await visualDiff(editor, `#10 report control type connection`);
      });
    });

    describe('with move hover over connection', () => {
      let editor: SlcCommunicationEditor;
      beforeEach(async () => {
        editor = await fixture(
          html`<scl-communication-editor
            .doc=${docRp}
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

        await sendMouse({ type: 'move', position: [241, 153] });

        await timeout(200);

        await visualDiff(
          editor,
          `#11 report control type connection highlight on hover`
        );
      });
    });
  });
});
