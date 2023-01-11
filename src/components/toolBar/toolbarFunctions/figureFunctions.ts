import {searchBlockId} from "./blockFunctions";

export function editFigureColor(editor: Editor, payload: { slideId: number, blockId: number, newColor: string }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]

    const newFigureColor = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                color: payload.newColor
            }
        }
    };

    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newFigureColor : currentBlock;
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
}

export function editFigureBorderColor(editor: Editor, payload: { slideId: number, blockId: number, newBorderColor: string }): Editor {
    const slide = editor.presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]
    const newFigureBorderColor = {
        ...block,
        blockType: {
            ...block.blockType,
            typeBlock: {
                ...block.blockType.typeBlock,
                borderColor: payload.newBorderColor
            }
        }
    };
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map((currentBlock, id) => {
            return (id === searchBlockId(payload.slideId, payload.blockId)) ? newFigureBorderColor : currentBlock;
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