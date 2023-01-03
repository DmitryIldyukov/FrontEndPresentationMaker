import React from "react";
import styles from "./Rectangle.module.css";
import useDragger from '../../../hooks/useDragger';
let count = 0;
let countstr = "";

function Rectangle(Props: {color: string, borderColor: string}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);
    const rectangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    return (
        <svg width="140" height="140" style={rectangleStyle} className={styles.rectangle} id={countstr}>
            <rect x="5" y="5" width="130" height="130"
                    fill={Props.color} stroke={Props.borderColor} stroke-width="5"
            />
        </svg>
    )
}
export default Rectangle;