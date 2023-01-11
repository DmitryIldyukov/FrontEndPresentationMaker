import {
    convertJsonToPresentation,
    convertPresentationToJson
} from "../hooks/exportFunctions";
import {
    undo,
    redo,
    updateHistory
} from "../hooks/undoRedo";
import { dispatch } from "./Editor";
import { MouseEvent } from "react";
import {
    createBlock,
    createImage,
    editBlockSize,
    removeBlock,
    savePosBlock,
    selectBlock
} from "../toolBar/blockFunctions";
import {editFigureBorderColor, editFigureColor} from "../toolBar/figureFunctions";
import {
    editTextColor, editTextContent,
    editTextFontBold,
    editTextFontFamily,
    editTextFontItalic,
    editTextFontSize
} from "../toolBar/textFunctions";
import {
    editSlideBackground,
} from "../slideList/slideFunctions";

export const createBlockHandler = (slideId: number, typeOfBlock: ContentType) => {
    updateHistoryHandler();
    dispatch(createBlock, {slideId, typeOfBlock})
}

export const backgroundHandler = (slideId: number, type: string,  value: string) => {
    updateHistoryHandler();

    let newBackground: BackgroundColor| BackgroundImage
        if (type === 'color') {
            newBackground = {
                type: 'color',
                color: value
            }
        } else {
            newBackground = {
                type: 'image',
                src: value
            }
        }

    dispatch(editSlideBackground, {slideId, newBackground})
}

export const createImageHandler = (slideId: number, typeOfBlock: ContentType , urlImage: string) => {
    updateHistoryHandler();
    dispatch(createImage, {slideId, typeOfBlock, urlImage})
}

export const selectBlockHandler = (slideId: number, blockId: number) => {
    dispatch(selectBlock, {slideId, blockId})
}

export const removeBlockHandler = (blockId: number, slideId: number) => {
    updateHistoryHandler();
    dispatch(removeBlock, {blockId, slideId})
}

export const changeFigureColorHandler = (blockId: number, slideId: number, newColor: string) => {
    updateHistoryHandler();
    dispatch(editFigureColor, {blockId, slideId, newColor})
}

export const changeFigureBorderColorHandler = (blockId: number, slideId: number, newBorderColor: string) => {
    updateHistoryHandler();
    dispatch(editFigureBorderColor, {blockId, slideId, newBorderColor})
}

export const changeTextColorHandler = (blockId: number, slideId: number, newColor: string) => {
    updateHistoryHandler();
    dispatch(editTextColor, {blockId, slideId, newColor})
}

export const changeTextSizeHandler = (blockId: number, slideId: number, newFontSize: number) => {
    updateHistoryHandler();
    dispatch(editTextFontSize, {blockId, slideId, newFontSize})
}

export const changeTextStyleHandler = (blockId: number, slideId: number, newFontItalic: string) => {
    updateHistoryHandler();
    dispatch(editTextFontItalic, {blockId, slideId, newFontItalic})
}

export const changeTextWeightHandler = (blockId: number, slideId: number, newFontBold: number) => {
    updateHistoryHandler();
    dispatch(editTextFontBold, {blockId, slideId, newFontBold})
}

export const changeFontFamilyHandler = (blockId: number, slideId: number, newFontFamily: string) => {
    updateHistoryHandler();
    dispatch(editTextFontFamily, {blockId, slideId, newFontFamily})
}

export const changeTextContent = (blockId: number, slideId: number, newContent: string) => {
    updateHistoryHandler();
    dispatch(editTextContent, {blockId, slideId, newContent})
}
export const saveAsJsonHandler = () => {
    dispatch(convertPresentationToJson, {})
}

export const openJsonHandler = (json: string) => {
    dispatch(convertJsonToPresentation, json);
}

export const undoHandler = () => {
    dispatch(undo, {})
}

export const redoHandler = () => {
    dispatch(redo, {})
}

export const updateHistoryHandler = () => {
    dispatch(updateHistory, {})
}

export const savePosBlockHandler = (slideId: number, blockId: number, newPosition: Position) => {
    updateHistoryHandler();
    dispatch(savePosBlock, {slideId, blockId, newPosition})
}

export const editBlockSizeHandler = (slideId: number, blockId: number, newSize: Size) => {
    updateHistoryHandler();
    dispatch(editBlockSize, {slideId, blockId, newSize})
}