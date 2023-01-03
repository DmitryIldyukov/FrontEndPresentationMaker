import React from 'react';
import styles from './Circle.module.css';

function Circle(Props: {color: string, borderColor: string}) {

    const circleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    return (
        <svg width="140" height="140" style={circleStyle}>
            <circle r="65" cx="70" cy="70"
                    fill={Props.color} stroke={Props.borderColor} stroke-width="5"
            />
        </svg>
    )
}

export default Circle;