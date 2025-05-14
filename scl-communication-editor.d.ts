import { LitElement, TemplateResult } from 'lit';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';
import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
import { CommunicationSclEditor } from './CommunicationSclEditor.js';
import { Connection } from './foundation/types.js';
declare const SlcCommunicationEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export default class SlcCommunicationEditor extends SlcCommunicationEditor_base {
    static scopedElements: {
        'communication-scl-editor': typeof CommunicationSclEditor;
        'md-dialog': typeof MdDialog;
        'action-list': typeof ActionList;
        'md-text-button': typeof MdTextButton;
    };
    doc?: XMLDocument;
    get substation(): Element | null;
    gridSize: number;
    editCount: number;
    selectedConnection?: Connection;
    removeSelection: MdDialog;
    removeInputs(inputs: Element[]): void;
    removeAllInputs(): void;
    renderRemoveDialog(): TemplateResult;
    render(): TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
export {};
