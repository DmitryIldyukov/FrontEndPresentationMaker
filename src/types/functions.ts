import {defaultSlide, defaultSlideBackground} from "./consts"
export function addToHistory(editor:Presentation){
    let count = 0;
    return{
        ...editor,
        history:[...editor.history.filter(e =>{
            if (count <= editor.historyIndex){
                count++;
                return e;
              }
            }),editor.history],
            historyIndex:count
    }
}
export function prevHistory(editor:Presentation){
    if(editor.historyIndex > 0){
        return{
            ...editor,
            presentation: editor.history[editor.historyIndex - 1],
            historyIndex: editor.historyIndex - 1
        }
    }
    else{
        return{
            ...editor
        }
    }
}

export function currHistory(editor:Presentation){
    console.log(editor)
    if(editor.historyIndex === editor.history.length - 1){
        return{
            ...editor
        }
    }
    else{
        return{
            ...editor,
            presentation: editor.history[editor.historyIndex + 1],
            historyIndex: editor.historyIndex + 1
        }
    }
}
export function createPresentation(): Presentation {
    return {
        presentationName: 'New Presentation',
        slides: [defaultSlide],
        selectedSlides: [defaultSlide],
        history:[],
        historyIndex: 0
    };
}

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
        background: defaultSlideBackground,
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

export function editSlideBackground(presentation: Presentation, payload: {slideId: number, newBackground: BackgroundColor | BackgroundImage}): Presentation {
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

    const newSelectedBlocks = [newBlock];
    const newBlocks = [...presentation.slides[payload.slideId - 1].blocks, newBlock];
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

export function removeBlock(presentation: Presentation, payload: {blockId: number, slideId: number}): Presentation {
    const slides = presentation.slides;
    const slide = slides[payload.slideId];

    if (presentation.slides[payload.slideId] !== undefined) {
        if (presentation.slides[payload.slideId].blocks.length !== 0) {
            let newBlocks = [];
            for (let i = 0; i < slide.blocks.length; i++) {
                if (slide.blocks[i].blockId !== payload.blockId) {
                    newBlocks.push(slide.blocks[i])
                }
            }

            const newSlide = {
                ...slide,
                blocks: newBlocks
            }

            return {
                ...presentation,
                slides: presentation.slides.map((currentSlide, id) => {
                    return (id === payload.slideId) ? newSlide : currentSlide;
                })
            }
        }
        return presentation
    }
    return presentation;
}

export function selectBlock(presentation: Presentation, payload: {slideId: number, blockId: number}): Presentation {
    const newSelectedBlock = presentation.slides[payload.slideId].blocks[payload.blockId];
    const newSelectedBlocks = [newSelectedBlock];
    const newSlide = {
        ...presentation.slides[payload.slideId],
        selectedBlocks: newSelectedBlocks
    }
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
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
export function editFigureColor(presentation: Presentation, payload: {slideId: number, blockId: number, newColor: string}): Presentation {
    const slide = presentation.slides[payload.slideId]
    const block = slide.selectedBlocks[0]

    const newFigureColor = {
        ...block,
        blockType: {        
            ...block.blockType,
            typeBlock: {        
                ...block.blockType.typeBlock,
                color:  payload.newColor
            }
        }
    };

    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newFigureColor : currentBlock;
        })};

    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId ) ? newSlide : currentSlide;
        })};
    }

export function editFigureBorderColor(presentation: Presentation, payload: {slideId: number, blockId: number, newBorderColor: string}): Presentation {
    const slide = presentation.slides[payload.slideId]
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
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newFigureBorderColor : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
        })
    };}

 //text
export function editTextColor(presentation: Presentation, payload:{slideId: number, blockId: number, newColor: string}): Presentation {
    const slide = presentation.slides[payload.slideId]
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
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newTextColor : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
        })
    };}

export function editTextFontFamily(presentation: Presentation, payload:{slideId: number, blockId: number, newFontFamily: string}): Presentation {
    const slide = presentation.slides[payload.slideId]
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
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newTextFamily : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
        })
    };
    };
    
export function editTextContent(presentation: Presentation, payload:{slideId: number, blockId: number, newContent: string}): Presentation {
    const slide = presentation.slides[payload.slideId]
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
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newTextsize : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
        })
    };
}

export function editTextFontSize(presentation: Presentation, payload:{ slideId: number, blockId: number, newFontSize: number}): Presentation {
    const slide = presentation.slides[payload.slideId]
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
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newTextsize : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
        })
    };
}

export function editTextFontBold(presentation: Presentation, payload:{slideId: number, blockId: number, newFontBold: number}): Presentation {
    const slide = presentation.slides[payload.slideId]
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
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newTextStyle : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
        })
    };
    }

export function editTextFontItalic(presentation: Presentation, payload:{slideId: number, blockId: number, newFontItalic: string}): Presentation {
    const slide = presentation.slides[payload.slideId]
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
        blocks: slide.blocks.map(( currentBlock, id) => {
            return (id === payload.blockId - 1) ? newTextStyle : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            return (id === payload.slideId) ? newSlide : currentSlide;
        })
    };
}