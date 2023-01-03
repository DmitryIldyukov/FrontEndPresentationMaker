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
        <svg width={sizing.width} height={sizing.height} style={circleStyle} className={styles.circle} id={countstr}>
            <circle r={(sizing.width / 2) - 3} cx={sizing.width / 2} cy={sizing.height / 2}
                    fill={Props.color} stroke={Props.borderColor} stroke-width="3"
            />
        </svg>
    )
}

export default Circle;