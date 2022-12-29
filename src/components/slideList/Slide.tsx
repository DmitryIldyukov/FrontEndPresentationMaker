import React from 'react';
import styles from './Slide.module.css';

const Slide = (Props: { slideId: number, isSelectedSlide: boolean }) => {
    return (
        <li className={styles.slideContainer}>
            <input id="radio-1" type="radio" name="radio"/>
            <label htmlFor="radio-1">
                <div className={styles.slideTool}>
                    <span className={ styles.slideNumber }>{ Props.slideId }</span>
                </div>
                <div className={styles.slide} >

                </div>
            </label>
        </li>
    )
}

export default Slide;