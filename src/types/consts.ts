export const colors = {
    black: "#000000",
    white: "#FFFFFF",
    red: "#ff0000",
    blue: "#0000FF",
    green: "#008000",
    transparent: "#00000000"
}

export const defaultSlideBackground: BackgroundColor = {
    type: 'color',
    color: "#FFFFFF"
}

export const defaultSlide: TSlide = {
    slideId: 1,
    blocks: [],
    background: defaultSlideBackground,
    selectedBlocks: []
}

export const defaultTextBlock: TText = {
    type: "text",
    fontColor: colors.black,
    content: "new text",
    fontSize: "36px",
    fontFamily: "Open Sans",
    id: 1
}

export const defaultTextBlockType: ContentType = {
    typeBlock: defaultTextBlock
}

export const defaultCircleBlock: Figure = {
    type: 'figure',
    figureType: 'circle',
    color: colors.transparent,
    borderColor: colors.black,
    id: 1
}

export const defaultImage: Image = {
    type:'image',
    src: ''
}

export const defaultImageType: ContentType = {
    typeBlock: defaultImage
}

export const defaultCircleBlockType: ContentType = {
    typeBlock: defaultCircleBlock
}

export const defaultRectangleBlock: Figure = {
    type: 'figure',
    figureType: 'rectangle',
    color: colors.transparent,
    borderColor: colors.black,
    id: 1
}

export const defaultRectangleBlockType: ContentType = {
    typeBlock: defaultRectangleBlock
}

export const defaultTriangleBlock: Figure = {
    type: 'figure',
    figureType: 'triangle',
    color: colors.transparent,
    borderColor: colors.black,
    id: 1
}

export const defaultTriangleBlockType: ContentType = {
    typeBlock: defaultTriangleBlock
}