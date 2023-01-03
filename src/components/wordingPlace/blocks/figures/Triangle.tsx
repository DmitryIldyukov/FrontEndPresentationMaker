import React from 'react';
import styles from './Triangle.module.css'
import useDragger from '../../../hooks/useDragger';
let count = 0;
let countstr = "";
function Triangle(Props: {color: string, borderColor: string}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);
    const triangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    return (
        <svg width="140" height="140" style={triangleStyle} className={styles.triangle} id={countstr}>
            <polygon points="4,136 68,4 136,136"
                     fill={Props.color} stroke={Props.borderColor} stroke-width="5"
            />
        </svg>
    );
};

export default Triangle;

