import {defaultSlide} from "../toolBar/ToolBarConst";
import {dispatch} from "./Editor";
import {editBlockSize, savePosBlock, selectBlock} from "../toolBar/toolbarFunctions/blockFunctions";
import {updateHistory} from "../hooks/undoRedo";

export function createPresentation(): Editor {
    return {
        history: {
            index: 0,
            states: []
        },
        presentation: {
            presentationName: 'New Presentation',
            slides: [defaultSlide],
            selectedSlides: [defaultSlide]
        }
    };
}

export function changePresentationName(editor: Editor, newName: string): Editor {
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            presentationName: newName
        }
    }
}

export const savePosBlockHandler = (slideId: number, blockId: number, newPosition: Position) => {
    dispatch(updateHistory, {})
    dispatch(savePosBlock, {slideId, blockId, newPosition})
}

export const selectBlockHandler = (slideId: number, blockId: number) => {
    dispatch(selectBlock, {slideId, blockId})
}

export const editBlockSizeHandler = (slideId: number, blockId: number, newSize: Size) => {
    dispatch(updateHistory, {})
    dispatch(editBlockSize, {slideId, blockId, newSize})
}