import {defaultSlide} from "../toolBar/ToolBarConst";

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