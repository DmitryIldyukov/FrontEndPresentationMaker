import React from 'react';
import styles from './CText.module.css';
import useDragger from '../../hooks/useDragger';
import {selectBlockHandler} from "../../editor/EditorFn";

let countstr = ""

function CText(Props: {presentation: Presentation, slideId: number, fontFamily: string, fontColor: string, fontSize: string, content: string, size: Size, blockId: number}) {
    let count = Props.blockId;
    countstr = count.toString();
    useDragger(countstr);

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

    const textStyle = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: Props.fontSize,
        height: Props.size.height,
        width: Props.size.width
    }

    return (
        <input
            onClick={() => selectBlockHandler(Props.slideId - 1, count - 1)}
            className={styles.text + " " + (checkSelect() ? styles.checked : undefined)}
            style={textStyle}
            type="textarea"
            defaultValue={Props.content}
            id={countstr}
        />
    );
};

export default CText;