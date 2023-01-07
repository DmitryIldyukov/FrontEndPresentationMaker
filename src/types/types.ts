type Editor = {
    history: THistory;
    presentation: Presentation;
}

type THistory = {
    index: number;
    states: Presentation[];
}

type Presentation = {
    presentationName: string;
    slides: TSlide[];
    selectedSlides: TSlide[];
}

type TSlide = {
    slideId: number;
    blocks: Block[];
    background: BackgroundColor | BackgroundImage;
    selectedBlocks: Block[]
}

type BackgroundColor = {
    type: 'color'
    color: string
}

type BackgroundImage = {
    type: 'image'
    src: string
}

type Block = {
    position: Position;
    blockId: number;
    blockType: ContentType;
    size: Size;
    link?: string;
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
    fontStyle: string,
    fontWeight: number,
    id: number
} 

type Image = {
    type: 'image';
    src: string
}

type Figure = {
    type: 'figure';
    figureType: 'rectangle' | 'circle' | 'triangle';
    color: string;
    borderColor: string,
    id: number
}