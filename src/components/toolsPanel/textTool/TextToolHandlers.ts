import {dispatch} from "../../editor/Editor";
import {
    editTextFontBold,
    editTextFontFamily,
    editTextFontItalic,
    editTextFontSize
} from "../../toolBar/textFunctions";
import {updateHistory} from "../../hooks/undoRedo";

export const changeTextSizeHandler = (blockId: number, slideId: number, newFontSize: number) => {
    dispatch(updateHistory, {})
    dispatch(editTextFontSize, {blockId, slideId, newFontSize})
}

export const changeTextStyleHandler = (blockId: number, slideId: number, newFontItalic: string) => {
    dispatch(updateHistory, {})
    dispatch(editTextFontItalic, {blockId, slideId, newFontItalic})
}

export const changeTextWeightHandler = (blockId: number, slideId: number, newFontBold: number) => {
    dispatch(updateHistory, {})
    dispatch(editTextFontBold, {blockId, slideId, newFontBold})
}

export const changeFontFamilyHandler = (blockId: number, slideId: number, newFontFamily: string) => {
    dispatch(updateHistory, {})
    dispatch(editTextFontFamily, {blockId, slideId, newFontFamily})
}