import React, {useEffect, useState} from 'react';
import styles from './CText.module.css';
import useDragger from '../../hooks/useDragger';
import {
    selectBlockHandler,
    changeTextContent
} from "../../editor/EditorFn";

let countstr = ""

function CText(Props: {
    presentation: Presentation,
    slideId: number,
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    content: string,
    size: Size,
    blockId: number,
    fontWeight: number,
    fontStyle: string,
    position: Position
}) {
    const [text, setText] = useState('')
    const [pos, setPos] = useState(Props.position)

    let count = Props.blockId;
    countstr = count.toString();

    useEffect(() => {
        setPos(Props.position)
    })

    useDragger(countstr, Props.position, Props.slideId, Props.blockId);

    function checkSelect() {
        if (Props.presentation.slides[Props.slideId - 1].blocks.length > 0) {
            if (Props.presentation.slides[Props.slideId - 1].selectedBlocks.length > 0) {
                if ((Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1] !== undefined)) {
                    if ((Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId) === Props.blockId) {
                        return true
                    }
                }
            }
        }
        return false
    }

    const editTextContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        changeTextContent(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, e.target.value)
    }

    const textStyle = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: Props.fontSize,
        height: Props.size.height,
        fontWeight: Props.fontWeight,
        fontStyle: Props.fontStyle,
        top: Props.position.y + 'px',
        left: Props.position.x + 'px'
    }

    return (
        <div>
            <textarea
                onClick={() => selectBlockHandler(Props.slideId - 1, Props.blockId)}
                onChange={(e) => editTextContentHandler(e)}
                className={styles.text + " " + (checkSelect() ? styles.checked : undefined)}
                style={textStyle}
                defaultValue={Props.content}
                id={countstr}
            />
        </div>
    );
};

export default CText;