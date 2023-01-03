import React from 'react';
import styles from './Triangle.module.css'

function Triangle(Props: {color: string, borderColor: string}) {

    const triangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    return (
        <svg width="140" height="140" style={triangleStyle} className={styles.triangle}>
            <polygon points="4,136 68,4 136,136"
                     fill={Props.color} stroke={Props.borderColor} stroke-width="5"
            />
        </svg>
    );
};

export default Triangle;

