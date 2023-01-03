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
    fontSize: 36,
    fontFamily: "Open Sans"
}

export const defaultTextBlockType: ContentType = {
    typeBlock: defaultTextBlock
}

export const defaultCircleBlock: Figure = {
    type: 'figure',
    figureType: 'circle',
    color: colors.blue,
    borderColor: colors.red
}

export const defaultCircleBlockType: ContentType = {
    typeBlock: defaultCircleBlock
}

export const defaultRectangleBlock: Figure = {
    type: 'figure',
    figureType: 'rectangle',
    color: colors.white,
    borderColor: colors.green
}

export const defaultRectangleBlockType: ContentType = {
    typeBlock: defaultRectangleBlock
}