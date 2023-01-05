import {
    createPresentation,
    createSlide,
    removeSlide,
    selectSlide,
    changePresentationName,
    createBlock,
    editSlideBackground,
    createImage
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

export const backgroundColorHandler = (slideId: number, colorNumber: string) => {
    console.log(colorNumber)
    const newColor: BackgroundColor = {
        color: colorNumber
    }
    
    const newBackground: BackgroundColor = newColor;

    dispatch(editSlideBackground, {slideId, newBackground})
}

export const createImageHandler = (slideId: number, typeOfBlock: ContentType , urlImage: string) => {
    dispatch(createImage, {slideId, typeOfBlock, urlImage})
}