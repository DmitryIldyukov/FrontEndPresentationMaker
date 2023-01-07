import {createPresentation} from "../../types/functions";

let editorU: Editor = createPresentation();

let onChangeHandler: Function = () => {};

function dispatch(modifyFn: Function, payload: Object): void {
    setState(modifyFn(editorU, payload));
}

function getState(): Editor {
    return editorU;
}

function setState(newPresentation: Editor): void {
    editorU = newPresentation;
    onChangeHandler();
}

function addOnChangeHandler(handler: Function): void {
    onChangeHandler = handler;
}

export {dispatch, getState, setState, addOnChangeHandler}