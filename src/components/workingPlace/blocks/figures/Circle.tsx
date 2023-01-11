import React, {useEffect, useState} from 'react';
import styles from './Circle.module.css';
import useDragger from '../../../hooks/useDragger';
import {selectBlockHandler} from "../../../editor/editorFunctions";

function Circle(Props: {presentation: Presentation, color: string, borderColor: string, size: Size, slideId: number, blockId: number, position: Position}) {
    const [pos, setPos] = useState(Props.position)

    const count = Props.blockId;
    const countstr = count.toString();

    useEffect(() => {
        setPos(Props.position)
    })

    useDragger(countstr, Props.position, Props.slideId, Props.blockId);

    const sizing = {
        height: Props.size.height,
        width: Props.size.width,
        top: Props.position.y,
        left: Props.position.x
    }

    const circleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

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

    return (
        <div>
            <div
                onClick={() => selectBlockHandler(Props.slideId - 1, Props.blockId)}
                className={styles.circle + " " + (checkSelect() ? styles.checked : undefined)}
                style={sizing}
                id={countstr}
            >
                <svg width='100%' height='100%' style={circleStyle}>
                    <ellipse cx='50%' cy='50%' rx="45%" ry="45%"
                            fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Circle;