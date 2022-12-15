import React from 'react';
import {slide} from '../types/Types';
import styles from './Slide.module.css';


export interface ISlide {
    id: number;
}

interface Props {
    slide: ISlide;
}

const Slide = ({slide}: Props) => {
    return (
        <li>
            <span>{slide.id}</span>
            <div className={styles.slide}>

            </div>
        </li>
    );
};

export default Slide;