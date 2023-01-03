export const colors = {
    black: "#000000",
    white: "#FFFFFF",
    red: "#ff0000",
    blue: "#0000FF",
    green: "#008000"
}

export const newBackground: BackgroundColor = {
    color: colors.white
}

export const defaultSlide: TSlide = {
    slideId: 1,
    blocks: [],
    background: newBackground,
    selectedBlocks: []
}

export const defaultTextBlock: TText = {
    type: "text",
    fontColor: colors.black,
    content: "TEXT",
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
    color: colors.white,
    borderColor: colors.black,
    id: 1
}

export const defaultCircleBlockType: ContentType = {
    typeBlock: defaultCircleBlock
}

export const defaultRectangleBlock: Figure = {
    type: 'figure',
    figureType: 'rectangle',
    color: colors.white,
    borderColor: colors.black,
    id: 1
}

export const defaultRectangleBlockType: ContentType = {
    typeBlock: defaultRectangleBlock
}

export const defaultTriangleBlock: Figure = {
    type: 'figure',
    figureType: 'triangle',
    color: colors.white,
    borderColor: colors.black,
    id: 1
}

export const defaultTriangleBlockType: ContentType = {
    typeBlock: defaultTriangleBlock
}