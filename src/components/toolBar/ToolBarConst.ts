export const defaultSlideBackground: BackgroundColor = {
    type: 'color',
    color: 'white'
}

export const defaultSlide: TSlide = {
    slideId: 1,
    blocks: [],
    background: defaultSlideBackground,
    selectedBlocks: []
}

export const defaultTextBlock: TText = {
    type: "text",
    fontColor: 'black',
    content: "new text",
    fontSize: 36,
    fontFamily: "Open Sans",
    fontWeight: 400,
    fontStyle: "normal"
}

export const defaultTextBlockType: ContentType = {
    typeBlock: defaultTextBlock
}

export const defaultCircleBlock: Figure = {
    type: 'figure',
    figureType: 'circle',
    color: 'white',
    borderColor: 'black'
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
    color: 'white',
    borderColor: 'black'
}

export const defaultRectangleBlockType: ContentType = {
    typeBlock: defaultRectangleBlock
}

export const defaultTriangleBlock: Figure = {
    type: 'figure',
    figureType: 'triangle',
    color: 'white',
    borderColor: 'black'
}

export const defaultTriangleBlockType: ContentType = {
    typeBlock: defaultTriangleBlock
}