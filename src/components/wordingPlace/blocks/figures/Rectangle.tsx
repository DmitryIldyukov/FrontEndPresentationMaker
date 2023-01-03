import React from "react";
import styles from "./Rectangle.module.css";

function Rectangle(Props: {color: string, borderColor: string}) {

    const rectangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    return (
        <svg width="140" height="140" style={rectangleStyle}>
            <rect x="5" y="5" width="130" height="130"
                    fill={Props.color} stroke={Props.borderColor} stroke-width="5"
            />
        </svg>
    )
}
export default Rectangle;