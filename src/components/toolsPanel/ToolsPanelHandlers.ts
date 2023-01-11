import {dispatch} from "../editor/Editor";
import {removeBlock} from "../toolBar/blockFunctions";
import {updateHistory} from "../hooks/undoRedo";

export const removeBlockHandler = (blockId: number, slideId: number) => {
    dispatch(updateHistory, {})
    dispatch(removeBlock, {blockId, slideId})
}