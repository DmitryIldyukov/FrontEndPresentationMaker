import {createPresentation} from "../../types/functions";

let editor: Presentation = createPresentation();

let onChangeHandler: Function = () => {};

function dispatch(modifyFn: Function, payload: Object): void {
    setState(modifyFn(editor, payload));
}

function getState(): Presentation {
    return editor;
}

function setState(newPresentation: Presentation): void {
    editor = newPresentation;
    onChangeHandler();
}

function addOnChangeHandler(handler: Function): void {
    onChangeHandler = handler;
}

export {dispatch, getState, setState, addOnChangeHandler}