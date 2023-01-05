import React from 'react';
import useDragger from '../../hooks/useDragger';

let count = 0;
let countstr = ""

function Image(Props: {size: Size, imageUrl: string}) {
    count = count + 1;
    countstr = count.toString();
    useDragger(countstr);

    return (
        <img 
            id={countstr}
            src={Props.imageUrl}
        />    
    );
};

export default Image;