import React from 'react';
// import {TSlide} from '../../types/types';
import styles from './Slide.module.css';
import { ISlide } from "../componentsTypes/typeSlide";

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