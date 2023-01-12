import React, {useState} from 'react';
import styles from './TextTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';
import arImg from '../../../assets/Ar.svg';
import { defaultTextBlock } from '../../toolBar/ToolBarConst';
import {changeTextColorHandler} from "../../workingPlace/WorkingPlaceHandlers";
import {removeBlockHandler} from "../ToolsPanelHandlers";
import {
    changeFontFamilyHandler,
    changeTextSizeHandler,
    changeTextStyleHandler,
    changeTextWeightHandler
} from "./TextToolHandlers";

const TextTool = (Props: {presentation: Presentation, slideId: number}) => {
    const [fontSizeText, setFontSizeText] = useState(defaultTextBlock.fontSize);
    const [color, setColor] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    function increment() {
        if (fontSizeText < 80) {
            setFontSizeText(fontSizeText + 1);
            changeTextSizeHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, fontSizeText + 1)
        }
    }

    function decrement() {
        if (fontSizeText > 1) {
            setFontSizeText(fontSizeText - 1);
            changeTextSizeHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, fontSizeText -  1)
        }
    }

    const editTextColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        changeTextColorHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, e.target.value)
    }


    const checkHandler = () => {
        setIsChecked(!isChecked)
        if ((!isChecked) === true) {
            changeTextWeightHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, 700)
        } else {
            changeTextWeightHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, 400)
        }
    }

    const secondCheckHandler = () => {
        setIsChecked(!isChecked)
        if ((!isChecked) === true) {
            changeTextStyleHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, "italic")
        } else {
            changeTextStyleHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, "normal")
        }
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
                <input onChange={e => setFontSizeText(e.target.valueAsNumber)} className={styles.changeFontSize} value={fontSizeText} type="number"/>
                <button  onClick={decrement} className={styles.decrementFontSize + ' ' + styles.actionFontSize}>
                    <span className={styles.action}>-</span>
                </button>
            </div>
            <button className={styles.toolBtn}>
                <input onChange={editTextColorHandler} type='color' className={styles.toolBarToolPencil}/>
            </button>
            <div className={styles.toolBtn}>
                <input type={'checkbox'} checked={isChecked} onChange={checkHandler}/>
            </div>
            <div className={styles.toolBtn}>
                <input type={'checkbox'} checked={isChecked} onChange={secondCheckHandler}/>
            </div>
        </div>
    );
};

export default TextTool;