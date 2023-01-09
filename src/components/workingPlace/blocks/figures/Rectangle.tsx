import React, {useEffect, useState} from "react";
import styles from "./Rectangle.module.css";
import useDragger from '../../../hooks/useDragger';
import {savePosBlockHandler, selectBlockHandler} from "../../../editor/EditorFn";

let countstr = "";

function Rectangle(Props: {presentation: Presentation, slideId: number, color: string, borderColor: string, size: Size, blockId: number, position: Position}) {
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

    const rectangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const sizing = {
        height: Props.size.height,
        width: Props.size.width,
        top: Props.position.y + 'px',
        left: Props.position.x + 'px'
    }

    return (
        <div className={styles.rectangleSize} onDoubleClick={() => selectBlockHandler(Props.slideId - 1, Props.blockId)}>
            <div className={styles.rectangle + " " + (checkSelect() ? styles.checked : undefined)} style={sizing} id={countstr}>
                <svg style={rectangleStyle} width='100%' height='100%' id={countstr} >
                    <rect x="1%" y="1%" width='98%' height='98%'
                            fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    )
}
export default Rectangle;