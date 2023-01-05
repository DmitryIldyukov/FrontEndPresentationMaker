import {defaultSlide, newBackground} from "./consts"

export function createPresentation(): Presentation {
    return {
        presentationName: 'New Presentation',
        slides: [defaultSlide],
        selectedSlides: [defaultSlide]
        // chosen: 'none'
    };
}

// export function chosenTypeBlock(presentation:Presentation, type: string): Presentation {
//
//     return {
//         ...presentation,
        // chosen: type
//     }
// }

export function createImage(presentation: Presentation, payload: {slideId: number, typeOfBlock: ContentType, urlImage: string}): Presentation {

    const newBlock = {
        blockType:  payload.typeOfBlock,
        blockId: presentation.slides[payload.slideId - 1].blocks.length + 1,
        position: {
            x: 60,
            y: 60
        },
        size :{
            width: 60,
            height: 60
        },
        link: payload.urlImage
    }

    const newSelectedBlocks = [];
    const newBlocks = [...presentation.slides[payload.slideId - 1].blocks, newBlock];
    newSelectedBlocks[0] = newBlock;
    const newSlide = {
        ...presentation.slides[payload.slideId - 1],
        selectedBlocks: newSelectedBlocks,
        blocks: newBlocks
    }
    return {
        ...presentation,
        slides: presentation.slides.map((currentSlide, id) => {
            return (id === payload.slideId - 1) ? newSlide : currentSlide;
        })
    };
}


export function showPresentation(presentation:Presentation): Presentation{
    return presentation;
}

export function changePresentationName(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        presentationName: newName
    }
}

export function savePresentation(presentation:Presentation): Presentation{
    return presentation;
}

//slide
export function createSlide(presentation: Presentation): Presentation {

    const newSlide: TSlide = {
        slideId: presentation.slides.length + 1,
        blocks: [],
        background: newBackground,
        selectedBlocks: []
    };
    const newSlides = [...presentation.slides, newSlide];
    return {
        ...presentation,
        slides: newSlides,
        selectedSlides: [newSlide]
    };
}
  
export function removeSlide(presentation: Presentation, slideId: number): Presentation {
    const newSlides = [];

    if (presentation.slides.length === 1)
        return presentation;
    for (let i = 0; i < presentation.slides.length; i++) {
        if (presentation.slides[i].slideId !== slideId) {
            if (presentation.slides[i].slideId >= slideId) {
                presentation.slides[i].slideId--;
                newSlides.push(presentation.slides[i]);
            }
            else
                newSlides.push(presentation.slides[i]);
        }
    }

    return {
        ...presentation,
        slides: newSlides,
        selectedSlides: [presentation.slides[0]]
    };
}

export function selectSlide(presentation: Presentation, slideId: number): Presentation {
    const slide = presentation.slides[slideId];
    const newSelectedSlides = [slide];
    return {
        ...presentation,
        selectedSlides: newSelectedSlides
    };
}

export function selectSlides(presentation:Presentation, slideIds: []): Presentation {
    slideIds.forEach((item) => {
        selectSlide(presentation, item);
    });
    return presentation;
}

export function editSlideBackground(presentation: Presentation, payload: {slideId: number, newBackground: BackgroundColor}): Presentation {
    const slide = presentation.slides[payload.slideId - 1]
    const newSlide = {
        ...slide,
        background: payload.newBackground,
    }
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId - 1 ) ? newSlide : currentSlide;
        })
    };
}

export function moveSlide(presentation: Presentation, oldSlideId: number, newSlideId: number): Presentation {
    const newSlides = [...presentation.slides];
    [newSlides[oldSlideId], newSlides[newSlideId]] = [newSlides[newSlideId], newSlides[oldSlideId]]
    return {
        ...presentation,
        slides: newSlides
    };
}

//block

export function createBlock(presentation: Presentation, payload: {slideId: number, typeOfBlock: ContentType}): Presentation {
    const newBlock = {
        blockType:  payload.typeOfBlock,
        blockId: presentation.slides[payload.slideId - 1].blocks.length + 1,
        position: {
            x: 300,
            y: 300
        },
        size :{
            width: 50,
            height: 50
        }
    }

    // const temp = payload.typeOfBlock.typeBlock.type
    const newSelectedBlocks = [];
    const newBlocks = [...presentation.slides[payload.slideId - 1].blocks, newBlock];
    newSelectedBlocks[0] = newBlock;
    const newSlide = {
        ...presentation.slides[payload.slideId - 1],
        selectedBlocks: newSelectedBlocks,
        blocks: newBlocks
    }
    return {
        ...presentation,
        // chosen: temp,
        slides: presentation.slides.map((currentSlide, id) => {
            return (id === payload.slideId - 1) ? newSlide : currentSlide;
        })
    };
}

export function removeBlock(presentation: Presentation, blockId: number, slideId: number): Presentation {
    const slides = presentation.slides;
    const slide = slides[slideId];
    const newSlide = {
        ...slide,
        blocks: slide.blocks.filter((block, id) => id !== blockId)
    }
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };
}

export function selectBlock(presentation: Presentation, slideId: number, blockId: number): Presentation {
    const newSelectedBlock = presentation.slides[slideId].blocks[blockId];
    const newSelectedBlocks = [...presentation.slides[slideId].selectedBlocks, newSelectedBlock];
    const newSlide = {
        ...presentation.slides[slideId],
        selectedBlocks: newSelectedBlocks
    }
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };
}

export function moveBlock(presentation: Presentation, slideId: number, blockId: number, newPosition: Position): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        position: newPosition
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    }
}

export function editBlockSize(presentation: Presentation, slideId: number, blockId: number, newSize: Size): Presentation {
    const slide = presentation.slides[slideId];
    const block = slide.blocks[blockId];
    const newBlock = {
        ...block,
        size : newSize
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };
}

//figure
export function editFigureColor(presentation: Presentation, slideId: number, blockId: number, newColor: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        color: newColor
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })};
    }

export function editFigureBorderColor(presentation: Presentation, slideId: number, blockId: number, newBorderColor: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        borderColor: newBorderColor
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };}

 //chars
export function editCharsColor(presentation: Presentation, slideId: number, blockId: number, newColor: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        color: newColor
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };}

export function editCharsFontFamily(presentation: Presentation, slideId: number, blockId: number, newFontFamily: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontFamily: newFontFamily
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };}
    
export function editCharsContent(presentation: Presentation, slideId: number, blockId: number, newContent: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        content: newContent
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })};
    }

export function editCharsFontSize(presentation: Presentation, slideId: number, blockId: number, newFontSize: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontSize: newFontSize
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };
}

export function editCharsFontBold(presentation: Presentation, slideId: number, blockId: number, newFontBold: boolean): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontBold: newFontBold
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })};
    }

export function editCharsFontItalic(presentation: Presentation, slideId: number, blockId: number, newFontItalic: boolean): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontItalic: newFontItalic
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })};
    }