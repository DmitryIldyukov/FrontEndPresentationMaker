import React from 'react';
import styles from './CText.module.css';

function CText(Props: {fontFamily: string, fontColor: string, fontSize: number, content: string}) {

    const textStyle = {
        fontFamily: Props.fontFamily,
        fontColor: Props.fontColor,
        fontsize: Props.fontSize
    }

    return (
        <p className={styles.text} style={textStyle}>
            {Props.content}
        </p>
    );
};

export default CText;