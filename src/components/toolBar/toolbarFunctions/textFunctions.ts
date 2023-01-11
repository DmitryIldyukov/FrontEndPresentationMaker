import {searchBlockId} from "./blockFunctions";

export function editTextColor(editor: Editor, payload: { slideId: number, blockId: number, newColor: string }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]
    const newTextColor = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                fontColor: payload.newColor
            }
        }
    };
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newTextColor : currentBlock;
        })
    };
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: editor.presentation.slides.map((currentSlide, id) => {
                return (id === payload.slideId) ? newSlide : currentSlide;
            })
        }
    };
}

export function editTextFontFamily(editor: Editor, payload: { slideId: number, blockId: number, newFontFamily: string }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]
    const newTextFamily = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                fontFamily: payload.newFontFamily
            }
        }
    };
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newTextFamily : currentBlock;
        })
    };
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: editor.presentation.slides.map((currentSlide, id) => {
                return (id === payload.slideId) ? newSlide : currentSlide;
            })
        }
    }
};

export function editTextContent(editor: Editor, payload: { slideId: number, blockId: number, newContent: string }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]
    const newTextsize = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                content: payload.newContent
            }
        }
    };
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newTextsize : currentBlock;
        })
    };
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: editor.presentation.slides.map((currentSlide, id) => {
                return (id === payload.slideId) ? newSlide : currentSlide;
            })
        }
    };
}

export function editTextFontSize(editor: Editor, payload: { slideId: number, blockId: number, newFontSize: number }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]
    const newTextsize = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                fontSize: payload.newFontSize
            }
        }
    };
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newTextsize : currentBlock;
        })
    };
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: editor.presentation.slides.map((currentSlide, id) => {
                return (id === payload.slideId) ? newSlide : currentSlide;
            })
        }
    };
}

export function editTextFontBold(editor: Editor, payload: { slideId: number, blockId: number, newFontBold: number }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]
    const newTextStyle = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                fontWeight: payload.newFontBold
            }
        }
    };
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newTextStyle : currentBlock;
        })
    };
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: editor.presentation.slides.map((currentSlide, id) => {
                return (id === payload.slideId) ? newSlide : currentSlide;
            })
        }
    };
}

export function editTextFontItalic(editor: Editor, payload: { slideId: number, blockId: number, newFontItalic: string }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]
    const newTextStyle = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                fontStyle: payload.newFontItalic
            }
        }
    };
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newTextStyle : currentBlock;
        })
    };
    return {
        ...editor,
        presentation: {
            ...editor.presentation,
            slides: editor.presentation.slides.map((currentSlide, id) => {
                return (id === payload.slideId) ? newSlide : currentSlide;
            })
        }
    };
}