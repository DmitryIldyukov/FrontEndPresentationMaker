import React from 'react';
import styles from './Slide.module.css';
import { selectSlideHandler } from '../editor/EditorFn';

const Slide = (Props: { slideId: number, isSelectedSlide: boolean }) => {
    return (
        <li
            onClick={() => selectSlideHandler(Props.slideId - 1)}
            className={styles.slideContainer}
            key={Props.slideId}
        >
            <div className={styles.slideMainPart + " " + (Props.isSelectedSlide ? styles.slideChecked : undefined)}>
                <div className={styles.slideTool}>
                    <span className={ styles.slideNumber }>{ Props.slideId }</span>
                </div>
                <div className={styles.slide}>

                </div>
            </div>
        </li>
    )
}

export default Slide;