import React, {useState} from 'react';
import Slide from './Slide';
import slide from './Slide';
import deleteSlide from '../../assets/deleteSlide.svg';
// import {slideList} from '../types/Types';
import {ISlide} from './Slide';
import styles from './SlideList.module.css';


const SlideList = () => {

    const [slideList, setSlideList] = useState<ISlide[]>([]);

    return (
        <ul className={styles.slideList}>
            {slideList.map((slide: ISlide, id: number) => {
                return <Slide slide={slide}/>
            })}
            {/*<li className={styles.slideContainer}>*/}
            {/*    <input id="radio-1" type="radio" name="radio"/>*/}
            {/*    <label htmlFor="radio-1">*/}
            {/*        <div className={styles.slideTool}>*/}
            {/*            <span className={styles.slideNumber}>1</span>*/}
            {/*            <img className={styles.deleteSlide} src={deleteSlide} />*/}
            {/*        </div>*/}
            {/*        <Slide />*/}
            {/*    </label>*/}
            {/*</li>*/}
            {/*<li className={styles.slideContainer}>*/}
            {/*    <input id="radio-2" type="radio" name="radio"/>*/}
            {/*    <label htmlFor="radio-2">*/}
            {/*        <div className={styles.slideTool}>*/}
            {/*            <span className={styles.slideNumber}>2</span>*/}
            {/*            <img className={styles.deleteSlide} src={deleteSlide} />*/}
            {/*        </div>*/}
            {/*        <Slide />*/}
            {/*    </label>*/}
            {/*</li>*/}
            {/*<li className={styles.slideContainer}>*/}
            {/*    <input id="radio-3" type="radio" name="radio"/>*/}
            {/*    <label htmlFor="radio-3">*/}
            {/*        <div className={styles.slideTool}>*/}
            {/*            <span className={styles.slideNumber}>3</span>*/}
            {/*            <img className={styles.deleteSlide} src={deleteSlide} />*/}
            {/*        </div>*/}
            {/*        <Slide />*/}
            {/*    </label>*/}
            {/*</li>*/}
        </ul>
    );
};

export default SlideList;