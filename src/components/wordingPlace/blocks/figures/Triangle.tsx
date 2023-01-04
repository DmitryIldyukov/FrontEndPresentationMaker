import React from 'react';
import styles from './Triangle.module.css'
import useDragger from '../../../hooks/useDragger';
let count = 0;
let countstr = "";

function Triangle(Props: {color: string, borderColor: string, size: Size}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);

    const triangleStyle = {
        color: Props.color,
        borderColor: Props.borderColor
    }

    const sizing = {
        height: Props.size.height,
        width: Props.size.width
    }

    function point() {
        let str: string;
        str = "4," + (Props.size.height - 4).toString() + " " + ((Props.size.height - 4) / 2).toString() + ",4 " + (Props.size.height - 4).toString() +","+ (Props.size.width - 4).toString();
        return str;
    }

    return (
        <div className={styles.triangle} style={sizing} id={countstr}>
            <svg width={sizing.width} height={sizing.height} style={triangleStyle} className={styles.triangle} id={countstr}>
                <polygon points={point()}
                         fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                />
            </svg>
        </div>
    );
};

export default Triangle;