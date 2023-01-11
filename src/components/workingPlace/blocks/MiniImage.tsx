import React from 'react';
import styles from './Image.module.css';

function MiniImage(Props: {
    presentation: Presentation,
    slideId: number,
    size: Size,
    imageUrl: string,
    blockId: number,
    position: Position
}) {

    const sizing = {
        height: (Props.size.height / 5),
        width: (Props.size.width / 5),
        top: (Props.position.y / 5),
        left: (Props.position.x / 5)
    }

    return (
        <div>
            <div style={sizing} className={styles.container} >
                <img
                    src={Props.imageUrl}
                    className={styles.imgStyle}
                />
            </div>
        </div>
    )
}

export default MiniImage;