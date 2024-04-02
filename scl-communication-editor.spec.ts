/* eslint-disable no-unused-expressions */
import { expect, fixture, html } from '@open-wc/testing';
import { sendMouse } from '@web/test-runner-commands';

import { SinonSpy, spy } from 'sinon';

import { Edit, isUpdate } from '@openscd/open-scd-core';

import { scd } from './testfiles.js';

import SlcCommunicationEditor from './scl-communication-editor.js';

const docWithIED = new DOMParser().parseFromString(scd, 'application/xml');

customElements.define('scl-communication-editor', SlcCommunicationEditor);

const sldURI = 'https://transpower.co.nz/SCL/SSD/SLD/v0';

describe('scl-communication-editor', () => {
  let editor: SlcCommunicationEditor;
  let editEvent: SinonSpy;

  beforeEach(async () => {
    editEvent = spy();

    editor = await fixture(
      html`<scl-communication-editor
        .doc=${docWithIED}
        @oscd-edit="${(evt: Edit) => editEvent(evt)}"
      ></scl-communication-editor>`
    );

    document.body.append(editor);

    await sendMouse({ type: 'click', position: [550, 24] });
  });

  afterEach(() => editor.remove());

  it('release selected IED looks like the latest snapshot', async () => {
    await editor.updateComplete;

    await sendMouse({ type: 'move', position: [150, 200] });
    await sendMouse({ type: 'click', position: [150, 200] });

    await sendMouse({ type: 'move', position: [150, 170] });
    await sendMouse({ type: 'click', position: [150, 170] });

    expect(editEvent).to.have.been.calledOnce;
    const edit = editEvent.args[0][0];
    expect(edit.detail).to.satisfy(isUpdate);
    expect(edit.detail.element.tagName).to.equal('IED');
    expect(edit.detail.attributes['esld:x']).to.exist;
    expect(edit.detail.attributes['esld:x'].namespaceURI).to.equal(sldURI);
    expect(edit.detail.attributes['esld:x'].value).to.equal('4');
    expect(edit.detail.attributes['esld:y']).to.exist;
    expect(edit.detail.attributes['esld:y'].namespaceURI).to.equal(sldURI);
    expect(edit.detail.attributes['esld:y'].value).to.equal('3');
    expect(edit.detail.attributes['esld:lx']).to.exist;
    expect(edit.detail.attributes['esld:lx'].namespaceURI).to.equal(sldURI);
    expect(edit.detail.attributes['esld:lx'].value).to.equal('5');
    expect(edit.detail.attributes['esld:ly']).to.exist;
    expect(edit.detail.attributes['esld:ly'].namespaceURI).to.equal(sldURI);
    expect(edit.detail.attributes['esld:ly'].value).to.equal('4');
  });

  it('fires edit action on IED label move', async () => {
    await sendMouse({ type: 'move', position: [180, 193] });
    await sendMouse({ type: 'click', position: [180, 193] });

    await sendMouse({ type: 'move', position: [180, 165] });
    await sendMouse({ type: 'click', position: [180, 165] });

    expect(editEvent).to.have.been.calledOnce;
    const edit = editEvent.args[0][0];
    expect(edit.detail).to.satisfy(isUpdate);
    expect(edit.detail.element.tagName).to.equal('IED');
    expect(edit.detail.attributes['esld:x']).to.not.exist;
    expect(edit.detail.attributes['esld:y']).to.not.exist;
    expect(edit.detail.attributes['esld:lx']).to.exist;
    expect(edit.detail.attributes['esld:lx'].namespaceURI).to.equal(sldURI);
    expect(edit.detail.attributes['esld:lx'].value).to.equal('5');
    expect(edit.detail.attributes['esld:ly']).to.exist;
    expect(edit.detail.attributes['esld:ly'].namespaceURI).to.equal(sldURI);
    expect(edit.detail.attributes['esld:ly'].value).to.equal('4');
  });
});
