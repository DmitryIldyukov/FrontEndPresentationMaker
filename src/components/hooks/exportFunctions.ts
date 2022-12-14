import jsPDF from "jspdf";

const exportWidth = 960
const exportHeight = 560

function setElementToPagePDF(progSlide: Block, doc: jsPDF) {
    if (progSlide.blockType.typeBlock.type === 'image') {
        if (progSlide.link !== undefined) {
            let imgData2 = progSlide.link;
            doc.addImage(imgData2, 'jpg', +progSlide.position.x, +progSlide.position.y, +progSlide.size.width, +progSlide.size.height)
        }
    } else if (progSlide.blockType.typeBlock.type === "text") {
        let CanEl: HTMLCanvasElement = document.createElement('canvas')
        CanEl.id = 'picID'
        let ctx = CanEl.getContext("2d")
        let startPosition = 0
        let sLine = ""
        let lineNumber = 0
        CanEl.height = parseInt(String(progSlide.blockType.typeBlock.fontSize))
        while (startPosition <= progSlide.blockType.typeBlock.content.length) {
            if (progSlide.blockType.typeBlock.content[startPosition] === '\n' ||
                startPosition === progSlide.blockType.typeBlock.content.length) {
                CanEl.width = sLine.length * parseInt(String(progSlide.blockType.typeBlock.fontSize))
                if (ctx != null) {
                    ctx.fillStyle = progSlide.blockType.typeBlock.fontColor
                    let styleT = '';
                    if (progSlide.blockType.typeBlock.fontWeight === 700) {
                        styleT = styleT + ' bold '
                    }
                    ;
                    if (progSlide.blockType.typeBlock.fontStyle === 'italic') {
                        styleT = styleT + ' italic '
                    }
                    ;

                    ctx.font = styleT + String(progSlide.blockType.typeBlock.fontSize) + "px " + progSlide.blockType.typeBlock.fontFamily;
                    ctx.fillText(sLine, 0, parseInt(String(progSlide.blockType.typeBlock.fontSize)) * 0.75)
                }
                let imgData2 = CanEl.toDataURL('image/png')
                doc.addImage(imgData2, 'PNG',
                    +progSlide.position.x + parseInt(String(progSlide.blockType.typeBlock.fontSize)) * 0.05, +progSlide.position.y
                    + parseInt(String(progSlide.blockType.typeBlock.fontSize)) * lineNumber + parseInt(String(progSlide.blockType.typeBlock.fontSize))
                    * 0.15 * (lineNumber + 1),
                    +CanEl.width, +CanEl.height)
                lineNumber += 1
                sLine = ""
            } else
                sLine += progSlide.blockType.typeBlock.content[startPosition]
            startPosition += 1
        }
    } else if (progSlide.blockType.typeBlock.type === "figure") {
        const color = (progSlide.blockType.typeBlock.color)
        const borderColor = (progSlide.blockType.typeBlock.borderColor)
        doc.setLineWidth(3)

        let drawType = ""

        if (color !== "" && borderColor !== "") {
            doc.setFillColor(color)
            doc.setDrawColor(borderColor)
            drawType = "DF"
        }
        if (drawType !== "") {
            if (progSlide.blockType.typeBlock.figureType === 'circle')
                doc.ellipse(+(progSlide.position.x + 3 + progSlide.size.width / 2), +(progSlide.position.y + 3 + progSlide.size.height / 2),
                    +progSlide.size.width / 2, +progSlide.size.height / 2, drawType)
            else if (progSlide.blockType.typeBlock.figureType === 'triangle')
                doc.triangle(+progSlide.position.x + 3 + +progSlide.size.width / 2, +progSlide.position.y + 3,
                    +progSlide.position.x + 3, +progSlide.position.y + 3 + +progSlide.size.height,
                    +progSlide.position.x + 3 + +progSlide.size.width, +progSlide.position.y + 3 + +progSlide.size.height, drawType)
            else
                doc.rect(+progSlide.position.x + 3, +progSlide.position.y + 3, +progSlide.size.width, +progSlide.size.height, drawType)
        }
    }
    return doc
}

function setPagePDF(progSlide: TSlide, doc: jsPDF) {
    if (progSlide.background.type === "image") {
        let imgData2 = progSlide.background.src
        doc.addImage(imgData2, 'PNG', +0, +0, +exportWidth, +exportHeight)
    }
    if (progSlide.background.type === "color") {
        doc.setFillColor(progSlide.background.color)
        doc.rect(0, 0, exportWidth, exportHeight, "F")
    }
    for (let i = 0; i < progSlide.blocks.length; i++) {
        doc = setElementToPagePDF(progSlide.blocks[i], doc)
    }
    return doc
}

function setPDF(prog: Presentation, doc: jsPDF) {
    for (let i = 0; i < prog.slides.length; i++) {
        doc = setPagePDF(prog.slides[i], doc)
        if (i + 1 < prog.slides.length) {
            doc.addPage([exportWidth, exportHeight], "landscape")
        }
    }
}

async function saveDocPDF(prog: Presentation, Path: string, doc: jsPDF) {
    await setPDF(prog, doc)
    doc.save(prog.presentationName + ".pdf")
}

export function saveProgramAsPDF(prog: Presentation) {
    const Path: string = ''
    let doc = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [exportWidth, exportHeight]
    })
    saveDocPDF(prog, Path, doc)
}

export function convertPresentationToJson(editor: Editor): Editor {
    const json: string = JSON.stringify(editor.presentation);
    const blob = new Blob([json], {type: "text/plain"});
    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", editor.presentation.presentationName + ".json");
    link.click();
    return editor;
}

export function convertJsonToPresentation(editor: Editor, json: string): Editor {
    if (typeof json === "object") {
        return json;
    }
    editor.presentation = JSON.parse(json);
    return editor;
}