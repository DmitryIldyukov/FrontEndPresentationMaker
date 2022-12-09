export type block = {
    id: string;
    typeBlock: text | image | figure;
    content: string;
    width: number;
    height: number;
    position: {
        x: number;
        y: number;
    }
}

export type text = {
    fontFamily: string;
    fontWidth: string;
    fontSize: number;
    color: string;
}

export type image = {
    src: string;
}

export type figure = {
    figureType: rectangle | circle | triangle;
}

export type slide = {
    id: string;
    blocks: block[];
    background: backgroundColor | backgroundImage;
}

export type slideList = {
    slides: Array<slide>;
}

export type backgroundColor = {
    color: string;
}

export type backgroundImage = {
    src: string;
}

export type presentation = {
    presentationName: string;
    selectedSlidesIds: [];                    //Показывается последний элемент массива
    selectedObjectsIds: [];
    slideList: slideList;
}

export type rectangle = {
    color: string;
    borderColor: string;
    mainPoint: {
        x: number;
        y: number;
    }
}

export type circle = {
    centerPoint: {
        x: number;
        y: number;
    };
    radius: number;
    color: string;
    borderColor: string;
}

export type triangle = {
    mainPoin: {
        x: number;
        y: number;
    }
}

export type editor = {
    presentation: presentation;
}