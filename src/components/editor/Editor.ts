import { Presentation } from "../../types/types"  

let editor = {} as Presentation;

function getEditor() {
    return editor;
}

function setEditor(newEditor: Presentation) {
    editor = newEditor;
}

function dispatch(modify: Function, ...payload: any) {
    const newEditor = modify(editor, payload);
    setEditor(newEditor);
}

export {getEditor, setEditor, dispatch}