import React from 'react';
import styles from './Triangle.module.css'

function MiniTriangle(Props: {presentation: Presentation, slideId: number, color: string, borderColor: string, size: Size, blockId: number, position: Position}) {

    const MiniTriangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const MiniTriangleSizing = {
        height: (Props.size.height / 4.4),
        width: (Props.size.width / 4.37),
        top: (Props.position.y / 4.4),
        left: (Props.position.x / 4.37)
    }

    return (
        <div>
            <div className={styles.triangle} style={MiniTriangleSizing}>
                <svg width='100%' height='100%' style={MiniTriangleStyle} preserveAspectRatio="none" viewBox='0 0 100 100'>
                    <polygon points='5,90 50,5 95,90'
                             fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    );
}

export default MiniTriangle