export const colors = {
    black: "#000000",
    white: "#FFFFFF"
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
    fontFamily: "Open Sans",
    // fontBold: false,
    // fontItalic: false,
    // outline: false
}

export const defaultTextBlockType: ContentType = {
    typeBlock: defaultTextBlock
}