import { dispatch } from "../editor/Editor";
import { editTextColor, editTextContent } from "../toolBar/textFunctions";
import { updateHistory } from "../hooks/undoRedo";

export const changeTextColorHandler = (blockId: number, slideId: number, newColor: string) => {
    dispatch(updateHistory, {})
    dispatch(editTextColor, {blockId, slideId, newColor})
}

export const changeTextContent = (blockId: number, slideId: number, newContent: string) => {
    dispatch(updateHistory, {})
    dispatch(editTextContent, {blockId, slideId, newContent})
}