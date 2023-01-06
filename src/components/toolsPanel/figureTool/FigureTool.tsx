import React from 'react';
import styles from './FigureTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';
import {removeBlockHandler} from "../../editor/EditorFn";
//blockId: number, slideId: number
const FigureTool = (Props: {presentation: Presentation, slideId: number}) => {
    return (
        <div className={styles.figureTool}>
            <button
                onClick={() => removeBlockHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1)}
                className={styles.toolBtn}
            >
                <img src={deleteImg}/>
            </button>
            <button className={styles.toolBtn}>
                <input type='color' className={styles.toolBarToolPencil}/>
            </button>
            <button className={styles.toolBtn}>
                <input type='color' className={styles.toolBarToolBucket}/>
            </button>
        </div>
    );
};

export default FigureTool;