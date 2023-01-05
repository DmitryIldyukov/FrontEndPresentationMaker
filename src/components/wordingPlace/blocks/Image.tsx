import React from 'react';
import styles from './Image.module.css';
import useDragger from '../../hooks/useDragger';

let count = 0;
let countstr = ""

function Image(Props: {size: Size, imageUrl: string}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr)
    
    const sizing = {
        height: Props.size.height,
        width: Props.size.width
    }

    return (
            <img 
                style={sizing}
                src={Props.imageUrl}
                id={countstr} 
                className={styles.imgStyle}
            /> 

    );
};

export default Image;