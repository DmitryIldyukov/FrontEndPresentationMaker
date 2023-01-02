import React, { useState } from 'react';
import styles from "./ToolBar.module.css";
import addSlide from "../../assets/add-slide.svg";
import deleteSlide from "../../assets/minus.svg";
import back from "../../assets/arrow-left.svg"
import forward from "../../assets/arrow-right.svg"
import addImage from "../../assets/add-image.svg";
import addText from "../../assets/add-text.svg";
import addFigure from "../../assets/add-figure.svg";
import showSlides from "../../assets/showSlides.svg";
import triangle from "../../assets/triangle.svg"
import circle from "../../assets/circle.svg"
import square from "../../assets/square.svg"
import { addSlideHandler, removeSlideHandler } from "../editor/EditorFn";

export function ToolBar(Props: { presentation: Presentation }) {
    return (
        <div className={styles.toolBar}>
            <button onClick={addSlideHandler} className={styles.toolBarTool}>Добавить слайд<img src={addSlide} className={styles.icon}/></button>
            <button onClick={() => removeSlideHandler(Props.presentation.selectedSlides[0].slideId)} className={styles.toolBarTool}><img src={deleteSlide} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={back} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={forward} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={addImage} className={styles.icon}/></button>
            <button className={styles.toolBarTool}><img src={addText} className={styles.icon}/></button>
            <button className={styles.toolBarTool + " " + styles.toolBarToolFigure}><img src={addFigure} className={styles.icon}/>
              <div className={styles.toolBarToolMenu}>
                <a href='#'><img src={triangle} className={styles.toolBarToolMenuFigure}/></a>
                <a href='#'><img src={circle} className={styles.toolBarToolMenuFigure}/></a>
                <a href='#'><img src={square} className={styles.toolBarToolMenuFigure}/></a>
              </div>
            </button>
            <button className={styles.toolBarTool}><img src={showSlides} className={styles.icon}/>Показ слайдов</button>
        </div>
    )
}

export default ToolBar;