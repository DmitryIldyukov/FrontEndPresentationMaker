import React, {useState} from 'react';
import styles from './TextTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';
import arImg from '../../../assets/Ar.svg';
import fontBoldImg from '../../../assets/BoldImg.svg';
import cursiveImg from '../../../assets/CursiveImg.svg';
import {removeBlockHandler, changeTextColorHandler, changeTextSizeHandler, changeTextStyleHandler, changeTextWeightHandler, changeFontFamilyHandler} from "../../editor/EditorFn";
import { defaultTextBlock } from '../../../types/consts';

const TextTool = (Props: {presentation: Presentation, slideId: number}) => {
    const [fontSizeU, setFontSizeU] = useState(defaultTextBlock.fontSize);
    const [color, setColor] = useState('')

    function increment() {
        if (fontSizeU < 80) {
            setFontSizeU(fontSizeU + 1);
            changeTextSizeHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, fontSizeU + 1)
        }
    }

    function decrement() {
        if (fontSizeU > 1) {
            setFontSizeU(fontSizeU - 1);
            changeTextSizeHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, fontSizeU -  1)
        }
    }

    const editTextColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        changeTextColorHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, e.target.value)
    }

    return (
        <div className={styles.textTool}>
            <button className={styles.toolBtn}><img src={deleteImg} onClick={() => removeBlockHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1)}/></button>
            <button className={styles.toolBtn + ' ' + styles.toolBtnFontBtn}><img src={arImg}/>
                <div className={styles.toolBtnFont}>
                    <a onClick={() => changeFontFamilyHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, 'Arial')}>Arial</a>
                    <a onClick={() => changeFontFamilyHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, 'Times New Roman')}>Times New Roman</a>
                    <a onClick={() => changeFontFamilyHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, 'Open Sans')}>Open Sans</a>
                    <a onClick={() => changeFontFamilyHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, 'Montserrat')}>Montserrat</a>
                </div>
            </button>
            <div className={styles.toolFontSize}>
                <button onClick={increment} className={styles.incrementFontSize + ' ' + styles.actionFontSize}>
                    <span className={styles.action}>+</span>
                </button>
                <input onChange={e => setFontSizeU(e.target.valueAsNumber)} className={styles.changeFontSize} value={fontSizeU} type="number"/>
                <button  onClick={decrement} className={styles.decrementFontSize + ' ' + styles.actionFontSize}>
                    <span className={styles.action}>-</span>
                </button>
            </div>
            <button className={styles.toolBtn}>
                <input onChange={editTextColorHandler} type='color' className={styles.toolBarToolPencil}/>
            </button>
            <button onClick={() => changeTextWeightHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, 700 )}className={styles.toolBtn}><img src={fontBoldImg}/></button>
            <button onClick={() => changeTextStyleHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, "italic")} className={styles.toolBtn}><img src={cursiveImg}/></button>
        </div>
    );
};

export default TextTool;