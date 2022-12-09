import React from 'react';
import styles from './Slide.module.css';
import {slide} from '../types/Types';

// type slideProps = {
//     slide: slide,
// }

const Slide = () => {
    // const {id} = props.slide

    return (
        <div className={styles.slide}>
            <div className={styles.slideNum}>
                {/*{props.slide.id}*/}
            </div>
        </div>
    );
};

export default Slide;