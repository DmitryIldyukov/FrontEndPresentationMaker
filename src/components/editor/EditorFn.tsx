import {
    createPresentation,
    createSlide,
    removeSlide,
    selectSlide,
    changePresentationName,
    createBlock
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

export const createBlockHandler = (slideId: number, type: ContentType) => {
    dispatch(createBlock, {slideId, type})
}