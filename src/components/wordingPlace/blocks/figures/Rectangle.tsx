import React from "react";
import styles from "./Rectangle.module.css";
import useDragger from '../../../hooks/useDragger';
let count = 0;
let countstr = "";

function Rectangle(Props: {color: string, borderColor: string, size: Size}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);

    const rectangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const sizing = {
        height: Props.size.height,
        width: Props.size.width
    }

    return (
        <div className={styles.rectangle} style={sizing} id={countstr}>
            <svg width={sizing.width} height={sizing.height} style={rectangleStyle} className={styles.rectangle} id={countstr}>
                <rect x="3" y="3" width={sizing.width - 6} height={sizing.height - 6}
                        fill={Props.color} stroke={Props.borderColor} stroke-width="3"
                />
            </svg>
        </div>
    )
}
export default Rectangle;