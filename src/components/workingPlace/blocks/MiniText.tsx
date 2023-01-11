import React from 'react';
import styles from './CText.module.css';

function MiniText(Props: {
    presentation: Presentation,
    slideId: number,
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    content: string,
    blockId: number,
    fontWeight: number,
    fontStyle: string,
    position: Position,
    width: number,
    height: number
}) {
    const textStyle = {
        fontFamily: Props.fontFamily,
        color: Props.fontColor,
        fontSize: (Props.fontSize / 5),
        fontWeight: Props.fontWeight,
        fontStyle: Props.fontStyle,
        top: (Props.position.y / 5),
        left: (Props.position.x / 5),
        height: (Props.height / 5),
        width: (Props.width / 5)
    }

    return (
        <div>
            <textarea
                className={styles.text}
                style={textStyle}
                defaultValue={Props.content}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.currentTarget.blur();
                    }
                }}
            />
        </div>
    );
};

export default MiniText;
