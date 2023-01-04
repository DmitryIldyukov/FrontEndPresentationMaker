import React from 'react';
import styles from './Circle.module.css';
import useDragger from '../../../hooks/useDragger';
let count = 0;
let countstr = "";

function Circle(Props: {color: string, borderColor: string, size: Size}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);

    const circleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const sizing = {
        height: Props.size.height,
        width: Props.size.width
    }

    return (
        <div className={styles.circle} style={sizing} id={countstr}>
            <svg width={sizing.width} height={sizing.height} style={circleStyle}>
                <circle r={(sizing.width / 2) - 3} cx={sizing.width / 2} cy={sizing.height / 2}
                        fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                />
            </svg>
        </div>
    )
}

export default Circle;