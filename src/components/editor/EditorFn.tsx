import {createPresentation, createSlide, removeSlide} from "../../types/functions";
import {dispatch} from "./Editor";

export const addSlideHandler = () => {
    dispatch(createSlide, {});
}

export const removeSlideHandler = (slideIndex: number) => {
    dispatch(removeSlide, slideIndex);
}

export const createPresentationHandler = () => {
    dispatch(createPresentation, {});
}