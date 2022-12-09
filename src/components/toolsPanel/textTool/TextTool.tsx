import React from 'react';
import styles from './TextTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';
import arImg from '../../../assets/Ar.svg';
import fontBoldImg from '../../../assets/BoldImg.svg';
import cursiveImg from '../../../assets/CursiveImg.svg';

const TextTool = () => {
    return (
        <div className={styles.textTool}>
            <button className={styles.toolBtn}><img src={deleteImg}/></button>
            <button className={styles.toolBtn}><img src={arImg}/></button>
            <div className={styles.toolFontSize}>
                <button className={styles.incrementFontSize + ' ' + styles.actionFontSize}>
                    <span className={styles.action}>+</span>
                </button>

                <input className={styles.changeFontSize} type="number"/>

                <button className={styles.decrementFontSize + ' ' + styles.actionFontSize}>
                    <span className={styles.action}>-</span>
                </button>
            </div>
            <button className={styles.toolBtn}><img src={fontBoldImg}/></button>
            <button className={styles.toolBtn}><img src={cursiveImg}/></button>
        </div>
    );
};

export default TextTool;