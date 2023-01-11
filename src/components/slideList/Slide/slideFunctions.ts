import {defaultSlideBackground} from "../../toolBar/ToolBarConst";

export function createSlide(editor: Editor): Editor {

    const newSlide: TSlide = {
        slideId: editor.presentation.slides.length + 1,
        blocks: [],
        background: defaultSlideBackground,
        selectedBlocks: []
    };
    const newSlides = [...editor.presentation.slides, newSlide]

    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: newSlides,
            selectedSlides: [newSlide]
        }
    }
}

export function removeSlide(editor: Editor, selectedSlides: TSlide[]): Editor {

    let selectedSlidesId: number[] = [];
    for (let i = 0; i < selectedSlides.length; i++) {
        selectedSlidesId.push(selectedSlides[i].slideId);
    }

    if (selectedSlidesId.length === 1) {
        if (editor.presentation.slides.length === 1) {
            return editor
        }
        const newSlides = [];
        for (let i = 0; i < editor.presentation.slides.length; i++) {
            if (editor.presentation.slides[i].slideId !== selectedSlidesId[0]) {
                if (editor.presentation.slides[i].slideId >= selectedSlidesId[0]) {
                    editor.presentation.slides[i].slideId--
                    newSlides.push(editor.presentation.slides[i]);
                } else
                    newSlides.push(editor.presentation.slides[i])
            }
        }
        return {
            ...editor,
            presentation: {
                ...editor.presentation,
                slides: newSlides,
                selectedSlides: [editor.presentation.slides[0]]
            }
        }
    } else {
        if (selectedSlides.length === editor.presentation.slides.length) {
            return editor;
        }
        selectedSlidesId.sort((a, b) => a - b);
        let slideList = editor.presentation.slides;
        let slideListCounter = 0;
        while (selectedSlidesId.length !== 0) {
            if (selectedSlidesId[0] !== slideList[slideListCounter].slideId) {
                slideListCounter++;
            } else {
                const index = slideList.indexOf(slideList[slideListCounter], 0);
                if (index > -1) {
                    slideList.splice(index, 1);
                }
                selectedSlidesId.splice(0, 1);
            }
        }
        const newSlideList = slideList.map((slide, id) => {
            slide.slideId = id + 1;
            return slide;
        })
        const newSelectedSlides = [newSlideList[0]];
        return {
            ...editor,
            presentation: {
                ...editor.presentation,
                slides: newSlideList,
                selectedSlides: newSelectedSlides
            }
        }
    }
}

export function selectSlide(editor: Editor, slideId: number): Editor {
    const slide = editor.presentation.slides[slideId];
    const newSelectedSlides = [slide];
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            selectedSlides: newSelectedSlides
        }
    }
}

export function selectSlides(editor: Editor, slideId: number): Editor {
    const slide = editor.presentation.slides[slideId];
    editor.presentation.selectedSlides.push(slide)
    return {
        ...editor,
    };
}

export function editSlideBackground(editor: Editor, payload: { slideId: number, newBackground: BackgroundColor | BackgroundImage }): Editor {
    const slide = editor.presentation.slides[payload.slideId - 1]
    const newSlide = {
        ...slide,
        background: payload.newBackground,
    }
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: editor.presentation.slides.map((currentSlide, id) => {
                return (id === payload.slideId - 1) ? newSlide : currentSlide;
            })
        }
    };
}