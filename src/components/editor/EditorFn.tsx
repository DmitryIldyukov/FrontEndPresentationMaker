import {
    createPresentation,
    createSlide,
    removeSlide,
    selectSlide,
    changePresentationName,
    createBlock,
    editSlideBackground,
    createImage,
    selectBlock, removeBlock, editFigureColor, editFigureBorderColor, editTextColor, editTextFontSize, editTextFontItalic, editTextFontBold
} from "../../types/functions";
import {dispatch} from "./Editor";

export const addSlideHandler = () => {
    dispatch(createSlide, {});
}

export const removeSlideHandler = (slideId: number) => {
    dispatch(removeSlide, slideId);
}

export const createPresentationHandler = () => {
    dispatch(createPresentation, {});
}

export const selectSlideHandler = (slideId: number) => {
    dispatch(selectSlide, slideId)
}

export const changePresentationNameHandler = (newName: string) => {
    dispatch(changePresentationName, newName)
}

export const createBlockHandler = (slideId: number, typeOfBlock: ContentType) => {
    dispatch(createBlock, {slideId, typeOfBlock})
}

export const backgroundHandler = (slideId: number, type: string,  value: string) => {
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
    dispatch(createImage, {slideId, typeOfBlock, urlImage})
}

export const selectBlockHandler = (slideId: number, blockId: number) => {
    dispatch(selectBlock, {slideId, blockId})
}

export const removeBlockHandler = (blockId: number, slideId: number) => {
    dispatch(removeBlock, {blockId, slideId})
}

export const changeFigureColorHandler = (blockId: number, slideId: number, newColor: string) => {
    dispatch(editFigureColor, {blockId, slideId, newColor})
}

export const changeFigureBorderColorHandler = (blockId: number, slideId: number, newBorderColor: string) => {
    dispatch(editFigureBorderColor, {blockId, slideId, newBorderColor})
}

export const changeTextColorHandler = (blockId: number, slideId: number, newColor: string) => {
    dispatch(editTextColor, {blockId, slideId, newColor})
}

export const changeTextSizeHandler = (blockId: number, slideId: number, newFontSize: number) => {
    dispatch(editTextFontSize, {blockId, slideId, newFontSize})
}

export const changeTextStyleHandler = (blockId: number, slideId: number, newFontItalic: string) => {
    dispatch(editTextFontItalic, {blockId, slideId, newFontItalic})
}

export const changeTextWeightHandler = (blockId: number, slideId: number, newFontBold: number) => {
    dispatch(editTextFontBold, {blockId, slideId, newFontBold})
}
