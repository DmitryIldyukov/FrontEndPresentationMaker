import {dispatch} from "../../editor/Editor";
import {editFigureBorderColor, editFigureColor} from "../../toolBar/toolbarFunctions/figureFunctions";
import {updateHistory} from "../../hooks/undoRedo";

export const changeFigureColorHandler = (blockId: number, slideId: number, newColor: string) => {
    dispatch(updateHistory, {})
    dispatch(editFigureColor, {blockId, slideId, newColor})
}

export const changeFigureBorderColorHandler = (blockId: number, slideId: number, newBorderColor: string) => {
    dispatch(updateHistory, {})
    dispatch(editFigureBorderColor, {blockId, slideId, newBorderColor})
}