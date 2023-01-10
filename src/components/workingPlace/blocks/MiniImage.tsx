import React from 'react';
import styles from './Image.module.css';

function MiniImage(Props: {presentation: Presentation, slideId: number, size: Size, imageUrl: string, blockId: number, position: Position}) {
    const sizing = {
        height: (Props.size.height / 4.4),
        width: (Props.size.width / 4.37),
        top: (Props.position.y / 4.4),
        left: (Props.position.x / 4.37)
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