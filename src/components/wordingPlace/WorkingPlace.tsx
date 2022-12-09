import React from 'react';
import styles from './WorkingPlace.module.css';
import Ttext from './blocks/Ttext';
import Triangle from "./blocks/figures/Triangle";
import Circle from "./blocks/figures/Circle";

const WorkingPlace = () => {
    return (
        <div className={styles.workingPlace}>
            <div className={styles.slidePlace}>
                <Ttext />
                <Triangle />
                <Circle />
            </div>
        </div>
    );
};

export default WorkingPlace;