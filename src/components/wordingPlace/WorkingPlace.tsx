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

    const triangleBlocks = Props.presentation.slides[Props.slideId - 1].blocks.map((block, id) => {
        if (block.blockType.typeBlock.type === "figure") {
            if (block.blockType.typeBlock.figureType === "circle") {
                return <Circle
                    key={id}
                    color={block.blockType.typeBlock.color}
                    borderColor={block.blockType.typeBlock.borderColor}
                />
            }
        }
    })

    return (
        <div className={styles.workingPlace}>
            <div className={styles.slidePlace}>
                {textBlocks}
                {triangleBlocks}
            </div>
        </div>
    );
};

export default WorkingPlace;