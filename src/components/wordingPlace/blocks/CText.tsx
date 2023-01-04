import React from 'react';
import styles from './CText.module.css';
import useDragger from '../../hooks/useDragger';
import {chosenTypeBlockHandler} from "../../editor/EditorFn";

let count = 0;
let countstr = ""

function CText(Props: {fontFamily: string, fontColor: string, fontSize: string, content: string, size: Size, typeCh: string}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);

    const textStyle = {
        fontFamily: Props.fontFamily,
        fontColor: Props.fontColor,
        fontSize: Props.fontSize,
        height: Props.size.height,
        width: Props.size.width
    }

    return (
        <input
            className={styles.text}
            style={textStyle}
            type="textarea"
            defaultValue={Props.content}
            id={countstr}
            onClick={() => chosenTypeBlockHandler(Props.typeCh)}
        />
    );
};

export default CText;