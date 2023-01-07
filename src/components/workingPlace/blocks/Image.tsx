import React from 'react';
import styles from './Image.module.css';
import useDragger from '../../hooks/useDragger';
import {selectBlockHandler} from "../../editor/EditorFn";

let countstr = ""

function Image(Props: {presentation: Presentation, slideId: number, size: Size, imageUrl: string, blockId: number, position: Position}) {
    let count = Props.blockId;
    countstr = count.toString();
    let newPos: Position = useDragger(countstr, Props.position);

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
    
    const sizing = {
        height: Props.size.height,
        width: Props.size.width
    }

    return (
            <img
                onClick={() => selectBlockHandler(Props.slideId - 1, Props.blockId - 1)}
                style={sizing}
                src={Props.imageUrl}
                id={countstr} 
                className={styles.imgStyle}
            />
    )
}

export default Image;