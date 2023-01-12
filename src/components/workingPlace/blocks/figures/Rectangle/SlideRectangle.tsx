import React from "react";
import styles from "./Rectangle.module.css";

function SlideRectangle(Props: {
    presentation: Presentation,
    color: string,
    borderColor: string,
    size: Size,
    slideId: number,
    blockId: number,
    position: Position
}) {

    const SlideRectangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const SlideRectangleSizing = {
        height: (Props.size.height / 5),
        width: (Props.size.width / 5),
        top: (Props.position.y / 5),
        left: (Props.position.x / 5)
    }

    return (
        <div className={styles.rectangleSize}>
            <div className={styles.rectangle} style={SlideRectangleSizing}>
                <svg style={SlideRectangleStyle} width='100%' height='100%' >
                    <rect x="1%" y="1%" width='98%' height='98%'
                          fill={Props.color} stroke={Props.borderColor} strokeWidth="1"
                    />
                </svg>
            </div>
        </div>
    )
}

export default SlideRectangle