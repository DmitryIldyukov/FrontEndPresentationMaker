import React from 'react';
import styles from './CText.module.css';

function MiniText(Props: {
    presentation: Presentation,
    slideId: number,
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    content: string,
    size: Size,
    blockId: number,
    fontWeight: number,
    fontStyle: string,
    position: Position
}) {
    const textStyle = {
    fontFamily: Props.fontFamily,
    color: Props.fontColor,
    fontSize: (Props.fontSize / 4.4),
    height: (Props.size.height / 4.37),
    fontWeight: Props.fontWeight,
    fontStyle: Props.fontStyle,
    top: (Props.position.y / 4.4),
    left: (Props.position.x / 4.37)
}

    return (
        <div className={styles.text} style={textStyle}>
            {Props.content}
        </div>
    );
};

export default MiniText;
