import {dispatch} from "../editor/Editor";
import {convertJsonToPresentation, convertPresentationToJson} from "../hooks/exportFunctions";

export const saveAsJsonHandler = () => {
    dispatch(convertPresentationToJson, {})
}

export const openJsonHandler = (json: string) => {
    dispatch(convertJsonToPresentation, json);
}