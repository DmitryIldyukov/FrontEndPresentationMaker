import React, {useState} from 'react';
import styles from './SlideList.module.css';
import Slide from './Slide';
import deleteSlide from '../../assets/deleteSlide.svg';
import {slideList} from "../types/Types";

const SlideList = () => {
    return (
        <ul className={styles.slideList}>
            <li className={styles.slideContainer}>
                <input id="radio-1" type="radio" name="radio"/>
                <label htmlFor="radio-1">
                    <div className={styles.slideTool}>
                        <span className={styles.slideNumber}>1</span>
                        <img className={styles.deleteSlide} src={deleteSlide} />
                    </div>
                    <Slide />
                </label>
            </li>
            <li className={styles.slideContainer}>
                <input id="radio-2" type="radio" name="radio"/>
                <label htmlFor="radio-2">
                    <div className={styles.slideTool}>
                        <span className={styles.slideNumber}>2</span>
                        <img className={styles.deleteSlide} src={deleteSlide} />
                    </div>
                    <Slide />
                </label>
            </li>
            <li className={styles.slideContainer}>
                <input id="radio-3" type="radio" name="radio"/>
                <label htmlFor="radio-3">
                    <div className={styles.slideTool}>
                        <span className={styles.slideNumber}>3</span>
                        <img className={styles.deleteSlide} src={deleteSlide} />
                    </div>
                    <Slide />
                </label>
            </li>
        </ul>
    );
};

export default SlideList;