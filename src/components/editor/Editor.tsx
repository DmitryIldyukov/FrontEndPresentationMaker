import { createPresentation } from "./editorFunctions";

let editor: Editor = createPresentation();

let onChangeHandler: Function = () => {};

function dispatch(modifyFn: Function, payload: Object): void {
    setState(modifyFn(editor, payload));
}

function getState(): Editor {
    return editor;
}

function setState(newPresentation: Editor): void {
    editor = newPresentation;
    onChangeHandler();
}

function addOnChangeHandler(handler: Function): void {
    onChangeHandler = handler;
}

export { dispatch, getState, setState, addOnChangeHandler }