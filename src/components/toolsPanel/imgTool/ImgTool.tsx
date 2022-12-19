import React from 'react';
import styles from './ImgTool.module.css';
import deleteImg from '../../../assets/deleteBlock.svg';

const ImgTool = () => {
    return (
        <div className={styles.textTool}>
            <button className={styles.toolBtn}><img src={deleteImg}/></button>
        </div>
    );
};

export default ImgTool;