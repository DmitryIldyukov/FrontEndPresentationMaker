type Presentation = {
    presentationName: string;
    slides: TSlide[];
    selectedSlides: TSlide[]
}

type TSlide = {
    slideId: number;
    blocks: Block[];
    background: BackgroundColor | BackgroundImage;
    selectedBlocks: Block[]
}

type BackgroundColor = {
    color: string
}

type BackgroundImage = {
    src: string
}

type Block = {
    position: Position;
    blockId: number;
    blockType: ContentType;
    size: Size;
    // isSelectedBlock: boolean
}

type Position = {
    x: number;
    y: number;
}

type ContentType = {
    typeBlock: TText | Image | Figure
}

type Size = {
    width: number;
    height: number
}

type TText = {
    type: "text";
    fontColor: string;
    content: string;
    fontSize: number;
    fontFamily: string;
} 

type Image = {
    type: 'image';
    src: string
}

type Figure = {
    type: 'figure';
    figureType: 'rectangle' | 'circle' | 'triangle';
    color: string;
    borderColor: string
}