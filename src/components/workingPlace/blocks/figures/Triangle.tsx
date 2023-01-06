import React from 'react';
import styles from './Triangle.module.css'
import useDragger from '../../../hooks/useDragger';
import {selectBlockHandler} from "../../../editor/EditorFn";
let countstr = "";

function Triangle(Props: {presentation: Presentation, slideId: number, color: string, borderColor: string, size: Size, blockId: number}) {
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

    const triangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const sizing = {
        height: Props.size.height,
        width: Props.size.width
    }

    return (
        <div>
            <div className={styles.triangle} style={sizing} id={countstr} onClick={() => selectBlockHandler(Props.slideId - 1, count - 1)}>
                <svg width='100%' height='100%' style={triangleStyle} preserveAspectRatio="none" id={countstr} viewBox='0 0 100 100' className={(checkSelect() ? styles.checked : undefined)}>
                    <polygon points='5,90 50,5 95,90'
                            fill={Props.color} stroke={Props.borderColor} strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Triangle;