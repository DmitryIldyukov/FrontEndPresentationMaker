import React from 'react';
import styles from './Triangle.module.css'
import useDragger from '../../../hooks/useDragger';
import {chosenTypeBlockHandler} from "../../../editor/EditorFn";
let count = 0;
let countstr = "";

function Triangle(Props: {color: string, borderColor: string, size: Size, typeCh: string}) {
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

    return (
        <div onClick={() => chosenTypeBlockHandler(Props.typeCh)}>
            <div className={styles.triangle} style={sizing} id={countstr}>
                <svg width='100%' height='100%' style={triangleStyle} preserveAspectRatio="none" id={countstr} viewBox='0 0 100 100'>
                    <polygon points='5,90 50,5 95,90'
                            fill={Props.color} stroke={Props.borderColor} strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Triangle;