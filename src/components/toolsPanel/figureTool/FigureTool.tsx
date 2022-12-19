import React from 'react';
import styles from './FigureTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';
import borderImg from '../../../assets/borderImg.svg';
import colorImg from '../../../assets/colorImg.svg';

const FigureTool = () => {
    return (
        <div className={styles.figureTool}>
            <button className={styles.toolBtn}><img src={deleteImg}/></button>
            <button className={styles.toolBtn}><img src={borderImg}/></button>
            <button className={styles.toolBtn}><img src={colorImg}/></button>
        </div>
    );
};

export default FigureTool;