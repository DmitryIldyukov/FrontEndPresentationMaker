import React from 'react';
import styles from './Circle.module.css';
import useDragger from '../../../hooks/useDragger';
import {savePosBlockHandler, selectBlockHandler} from "../../../editor/EditorFn";

let countstr = "";

function Circle(Props: {presentation: Presentation, color: string, borderColor: string, size: Size, slideId: number, blockId: number, position: Position}) {
    let count = Props.blockId;
    countstr = count.toString();
    let lastPosition: Position = Props.position;
    let newPos: Position;
    newPos = useDragger(countstr, lastPosition);

    if (lastPosition.x !== newPos.x || lastPosition.y !== newPos.y) {
        savePosBlockHandler(Props.slideId, Props.blockId, newPos);
        lastPosition = newPos;
    }

    const sizing = {
        height: Props.size.height,
        width: Props.size.width,
        top: Props.position.y + 'px',
        left: Props.position.x + 'px'
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
                        return true;
                    }
                }
            }
        }
        return false
    }

    return (
        <div>
            <div
                onClick={() => selectBlockHandler(Props.slideId - 1, count - 1)}
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