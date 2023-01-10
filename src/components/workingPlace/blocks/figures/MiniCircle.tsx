import React from 'react'
import styles from "./Circle.module.css";

function MiniCircle(Props: {presentation: Presentation, color: string, borderColor: string, size: Size, slideId: number, blockId: number, position: Position}) {

    const miniCircleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const miniCircleSizing = {
        height: (Props.size.height / 4.4),
        width: (Props.size.width / 4.37),
        top: (Props.position.y / 4.4),
        left: (Props.position.x / 4.37)
    }

    return (
        <div>
            <div className={styles.circle} style={miniCircleSizing}>
                <svg width='100%' height='100%' style={miniCircleStyle}>
                    <ellipse cx='50%' cy='50%' rx="45%" ry="45%"
                             fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    )
}

export default MiniCircle