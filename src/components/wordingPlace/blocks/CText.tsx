import React from 'react';
import styles from './CText.module.css';
import useDragger from '../../hooks/useDragger';
let count = 0;
let countstr = ""
function CText(Props: {fontFamily: string, fontColor: string, fontSize: number, content: string}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);
    const textStyle = {
        fontFamily: Props.fontFamily,
        fontColor: Props.fontColor,
        fontsize: Props.fontSize
    }

    return (
        <input className={styles.text} style={textStyle} type="textarea" defaultValue={Props.content} id={countstr} />
    );
};

export default CText;