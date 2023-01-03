import React from 'react';
import styles from './CText.module.css';

function CText(Props: {fontFamily: string, fontColor: string, fontSize: number, content: string}) {

    const textStyle = {
        fontFamily: Props.fontFamily,
        fontColor: Props.fontColor,
        fontSize: Props.fontSize
    }

    return (
        <input className={styles.text} style={textStyle} type="textarea" defaultValue={Props.content} />
    );
};

export default CText;