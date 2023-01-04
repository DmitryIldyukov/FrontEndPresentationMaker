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
        <div className={styles.rectangleSize}>
            <div className={styles.rectangle} style={sizing} id={countstr}>
                <svg style={rectangleStyle} width='100%' height='100%' id={countstr}>
                    <rect x="1%" y="1%" width='98%' height='98%'
                            fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    )
}
export default Rectangle;