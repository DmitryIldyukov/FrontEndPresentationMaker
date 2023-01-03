import React from 'react';
import styles from './Circle.module.css';
import useDragger from '../../../hooks/useDragger';
let count = 0;
let countstr = "";

function Circle(Props: {color: string, borderColor: string}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);
    const circleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    return (
        <svg width="140" height="140" style={circleStyle} className={styles.circle} id={countstr}>
            <circle r="65" cx="70" cy="70"
                    fill={Props.color} stroke={Props.borderColor} stroke-width="5" 
            />
        </svg>
    )
}

export default Circle;