export type Presentation = {
    presentationName: string,
    slides: TSlide[],
    selectedSlides: TSlide[],
    slideSize: Size       
}

export type Block = {
    position: Position,
    blockId: number,
    contentType: Chars | Image | Figure,
    size: Size,
    isSelectedBlock: boolean
}

export type Position = {
    x: number;
    y: number;
}

export type Size = {
    width: number,
    heigth: number
}

export type Chars = {
    color: string,
    content: string,
    fontSize: number,
    fontFamily:string,
    fontBold: boolean,
    fontItalic: boolean
} 

export type Image = {
    src: string;
}

export type Figure = {
    figureType: Rectangle | Circle | Triangle,
    color: string;
    borderColor: string;
}

export type TSlide = {
    slideId: number;
    blocks: Block[];
    background: BackgroundColor | BackgroundImage;
    isSelectedSlide: boolean;
}

export type BackgroundColor = {
    color: string;
}

export type BackgroundImage = {
    src: string;
}

export type Rectangle = {
    color: string,
    borderColor: string,
}

export type Circle = {
    color: string,
    borderColor: string
}

export type Triangle = {
    color: string,
    borderColor: string
}

