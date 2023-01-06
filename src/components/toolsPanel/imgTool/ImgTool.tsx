import React from 'react';
import styles from './ImgTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';
import {removeBlockHandler} from "../../editor/EditorFn";

const ImgTool = (Props: {presentation: Presentation, slideId: number}) => {
    return (
        <div className={styles.textTool}>
            <button className={styles.toolBtn}><img src={deleteImg} onClick={() => removeBlockHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1)}/></button>
        </div>
    );
};

export default ImgTool;