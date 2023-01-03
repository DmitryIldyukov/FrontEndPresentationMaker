import React from 'react';
import styles from './WorkingPlace.module.css';
import CText from './blocks/CText';
import Triangle from "./blocks/figures/Triangle";
import Circle from "./blocks/figures/Circle";

function WorkingPlace(Props: {presentation: Presentation, slideId: number}) {

    const textBlocks = Props.presentation.slides[Props.slideId - 1].blocks.map((block, id) => {
        if (block.blockType.typeBlock.type === "text") {
            return <CText
                key={id}
                fontFamily={block.blockType.typeBlock.fontFamily}
                fontColor={block.blockType.typeBlock.fontColor}
                fontSize={block.blockType.typeBlock.fontSize}
                content={block.blockType.typeBlock.content}
            />
        }
        return null;
    })

    return (
        <div className={styles.workingPlace}>
            <div className={styles.slidePlace}>
                {textBlocks}
            </div>
        </div>
    );
};

export default WorkingPlace;