import React from 'react';
import styles from './Circle.module.css';
import useDragger from '../../../hooks/useDragger';
import { chosenTypeBlockHandler } from "../../../editor/EditorFn";
let count = 0;
let countstr = "";

function Circle(Props: {color: string, borderColor: string, size: Size, typeCh: string}) {
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
        <div>
            <div className={styles.circle} style={sizing} id={countstr} onClick={() => chosenTypeBlockHandler(Props.typeCh)}>
                <svg width='100%' height='100%' style={circleStyle}>
                    <ellipse cx='50%' cy='50%' rx="45%" ry="45%"
                            fill={Props.color} stroke={Props.borderColor} strokeWidth="3"
                    />
                </svg>
            </div>
        </div>
    )
}

export default Circle;