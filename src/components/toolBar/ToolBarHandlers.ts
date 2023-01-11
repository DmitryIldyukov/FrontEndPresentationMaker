import {dispatch} from "../editor/Editor";
import {createBlock, createImage} from "./blockFunctions";
import {editSlideBackground} from "../slideList/slideFunctions";
import {updateHistory} from "../hooks/undoRedo";

export const createBlockHandler = (slideId: number, typeOfBlock: ContentType) => {
    dispatch(updateHistory, {})
    dispatch(createBlock, {slideId, typeOfBlock})
}

export const backgroundHandler = (slideId: number, type: string, value: string) => {
    dispatch(updateHistory, {})
    let newBackground: BackgroundColor | BackgroundImage
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

export const createImageHandler = (slideId: number, typeOfBlock: ContentType, urlImage: string) => {
    dispatch(updateHistory, {})
    dispatch(createImage, {slideId, typeOfBlock, urlImage})
}