import React from 'react'
import styles from "./Circle.module.css";

function SlideCircle(Props: {
    presentation: Presentation,
    color: string,
    borderColor: string,
    size: Size,
    slideId: number,
    blockId: number,
    position: Position
}) {

    const SlideCircleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const SlideCircleSizing = {
        height: (Props.size.height / 5),
        width: (Props.size.width / 5),
        top: (Props.position.y / 5),
        left: (Props.position.x / 5)
    }

    return (
        <div>
            <div className={styles.circle} style={SlideCircleSizing}>
                <svg width='100%' height='100%' style={SlideCircleStyle}>
                    <ellipse cx='50%' cy='50%' rx="45%" ry="45%"
                             fill={Props.color} stroke={Props.borderColor} strokeWidth="1"
                    />
                </svg>
            </div>
        </div>
    )
}

export default SlideCircle