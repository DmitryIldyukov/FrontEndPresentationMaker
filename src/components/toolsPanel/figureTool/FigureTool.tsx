import React, {useState} from 'react';
import styles from './FigureTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';
import {removeBlockHandler} from "../ToolsPanelHandlers";
import {changeFigureBorderColorHandler, changeFigureColorHandler} from "./FigureToolHandlers";

const FigureTool = (Props: { presentation: Presentation, slideId: number }) => {
    const [color, setColor] = useState('')

    const editFigureColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        changeFigureColorHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, e.target.value)
    }

    const editFigureBorderColorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
        changeFigureBorderColorHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1, e.target.value)
    }

    return (
        <div className={styles.figureTool}>
            <button
                onClick={() => removeBlockHandler(Props.presentation.slides[Props.slideId - 1].selectedBlocks[Props.presentation.slides[Props.slideId - 1].selectedBlocks.length - 1].blockId, Props.slideId - 1)}
                className={styles.toolBtn}
            >
                <img src={deleteImg}/>
            </button>
            <button className={styles.toolBtn}>
                <input onChange={editFigureBorderColorHandler} value={color} type='color'
                       className={styles.toolBarToolPencil}/>
            </button>
            <button className={styles.toolBtn}>
                <input onChange={editFigureColorHandler} type='color' value={color}
                       className={styles.toolBarToolBucket}/>
            </button>
        </div>
    );
};

export default FigureTool;