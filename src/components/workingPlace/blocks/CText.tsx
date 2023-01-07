import React, { useState }  from 'react';
import styles from './CText.module.css';
import useDragger from '../../hooks/useDragger';
import {selectBlockHandler,  changeTextContent} from "../../editor/EditorFn";

let countstr = ""

function CText(Props: {presentation: Presentation, slideId: number, fontFamily: string, fontColor: string, fontSize: number, content: string, size: Size, blockId: number, fontWeight: number, fontStyle: string}) {
    let count = Props.blockId;
    countstr = count.toString();
    useDragger(countstr);
    const [text, setText] = useState('')

    function checkSelect() {
        if (Props.presentation.slides[Props.slideId - 1].blocks.length > 0) {
            if (Props.presentation.slides[Props.slideId - 1].selectedBlocks.length > 0) {
                if ((Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1] !== undefined)) {
                    if ((Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId) === count) {
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
        fontStyle: Props.fontStyle
    }

    return (
        <div>
            <textarea
                onClick={() => selectBlockHandler(Props.slideId - 1, count - 1)}
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