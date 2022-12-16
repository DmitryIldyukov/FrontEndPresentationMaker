const block1 = {
    id: '1',
    typeBlock: 'text',
    content: 'hello',
    width: 400,
    height: 600,
    position: {
        x: 232,
        y: 435
    }
}

const block2 = {
    id: '2',
    typeBlock: 'image',
    content: '',
    width: 400,
    height: 600,
    position: {
        x: 400,
        y: 200
    }
}

const block3 = {
    id: '3',
    typeBlock: 'figure',
    content: '',
    width: 400,
    height: 600,
    position: {
        x: 300,
        y: 200
    }
}

const text = {
    fontFamily: 'Roboto',
    fontWidth: 'Bold',
    fontSize: 24,
    color: 'black'
}

const image = {
    src: '/study/hello.jpg'
}

const figure = {
    figureType: 'circle'
}

const slide1 = {
    id: '1',
    blocks: [block1, block2, block3],
    background: "white"
}

const presentation = {
    presentationName: 'Презентация',
    selectedSlidesIds: ['1'],                    //Показывается последний элемент массива
    selectedObjectsIds: ['1', '2'],
    slides: [slide1]
}

const editor = {
    presentation
}

const circle = {
    centerPoint: {
        x: 40,
        y: 30
    },
    radius: 50,
    color: 'black',
    borderColor: 'white'
}

const rectangle = {
    color: 'black',
    borderColor: 'white',
    mainPoint: {
        x: 80,
        y: 40
    }
}

const triangle = {
    mainPoin: {
        x: 80,
        y: 90
    }
}



function showPresentation(editor) {
    return editor;
}

function changePresentationName(editor) {
    return editor;
}

function deleleSlides(editor) {
    return editor;
}

//block
function addBlockText(editor) {
    return editor;
}
function addBlockImage(editor) {
    return editor;
}
function addBlockFigure(editor) {
    return editor;
}
function deleteBlock(editor) {
    return editor;
}
function moveBlock(editor, block) {
    return editor;
}
function resizeFigure(editor, figure) {
    return editor;
}
function editColor(editor, figure, color) {
    return editor;
}
function editBorderColor(editor, figure, color) {
    return editor;
}

//chars
function editTextSize(editor) {
    return editor;
}
function editTextColor(editor) {
    return editor;
}
function editTextContent(editor) {
    return editor;
}
function editTextFontFamily(editor, fontFamily) {
    return editor;
}
function editTextFontSize(editor, fontSize) {
    return editor;
}
function editTextFontWidth(editor, fontWidth) {
    return editor;
}

//image
function createImage(editor, src) {
    return editor;
}
function editImageSize(editor, image) {
    return editor;
}

//circle
function createCircle(editor) {
    return editor;
}

//rectangle
function createRectangle(editor) {
    return editor;
}

//triangle
function createTriangle(editor) {
    return editor;
}


