import React, {useEffect, useState} from 'react';
import styles from './Triangle.module.css'
import useDragger from '../../../../hooks/useDragger';
import {selectBlockHandler} from "../../../../editor/editorFunctions";
let countstr = "";

function Triangle(Props: {presentation: Presentation, slideId: number, color: string, borderColor: string, size: Size, blockId: number, position: Position}) {
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
                    if ((Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId) === count) {
                        return true
                    }
                }
            }
        }
        return false
    }

    const triangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const sizing = {
        height: Props.size.height,
        width: Props.size.width,
        top: Props.position.y,
        left: Props.position.x
    }

    return (
        <div>
            <div className={styles.triangle + " " + (checkSelect() ? styles.checked : undefined)} style={sizing} id={countstr} onClick={() => selectBlockHandler(Props.slideId - 1, Props.blockId)}>
                <svg width='100%' height='100%' style={triangleStyle} preserveAspectRatio="none" id={countstr} viewBox='0 0 100 100'>
                    <polygon points='5,90 50,5 95,90'
                            fill={Props.color} stroke={Props.borderColor} strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Triangle;