import React, { useState } from 'react';
import styles from './ToolBar.module.css';
import addSlide from "../../assets/add-slide.svg";
import addImage from "../../assets/add-image.svg";
import addText from "../../assets/add-text.svg";
import addFigure from "../../assets/add-figure.svg";
import showSlides from "../../assets/showSlides.svg";
import { addSlideHandler, removeSlideHandler } from "../editor/EditorFn";

export function ToolBar(Props: { presentation: Presentation }) {
    return (
        <div className={styles.toolBar}>
            <button onClick={addSlideHandler} className={styles.toolBarTool}>Добавить слайд<img src={addSlide} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={addImage} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={addText} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={addFigure} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={showSlides} className={styles.icon}/>Показ слайдов</button>
        </div>
    )
}

export default ToolBar;