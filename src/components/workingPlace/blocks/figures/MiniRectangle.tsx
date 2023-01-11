import React from "react";
import styles from "./Rectangle.module.css";

function MiniRectangle(Props: {
    presentation: Presentation,
    color: string,
    borderColor: string,
    size: Size,
    slideId: number,
    blockId: number,
    position: Position
}) {

    const MiniRectangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const MiniRectangleSizing = {
        height: (Props.size.height / 4.4),
        width: (Props.size.width / 4.37),
        top: (Props.position.y / 4.4),
        left: (Props.position.x / 4.37)
    }

    return (
        <div className={styles.rectangleSize}>
            <div className={styles.rectangle} style={MiniRectangleSizing}>
                <svg style={MiniRectangleStyle} width='100%' height='100%' >
                    <rect x="1%" y="1%" width='98%' height='98%'
                          fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    )
}

export default MiniRectangle