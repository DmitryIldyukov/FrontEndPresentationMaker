import React from 'react';
import styles from './WorkingPlace.module.css';
import CText from './blocks/CText';
import Triangle from "./blocks/figures/Triangle";
import Rectangle from "./blocks/figures/Rectangle";
import Circle from "./blocks/figures/Circle";
import Image from './blocks/Image';

function WorkingPlace(Props: {presentation: Presentation, slideId: number}) {

    const imageBlocks = Props.presentation.slides[Props.slideId - 1].blocks.map((block, id) => {
        if (block.blockType.typeBlock.type === "image") {

            block.size = {
                height: 40,
                width: 40
            }

            return <Image 
                key={id}
                size={block.size}
                imageUrl={block.blockType.typeBlock.src}
            />
        }
        return null
    })

    const textBlocks = Props.presentation.slides[Props.slideId - 1].blocks.map((block, id) => {
        if (block.blockType.typeBlock.type === "text") {

            block.size = {
                height: 40,
                width: 200
            }

            return <CText
                key={id}
                fontFamily={block.blockType.typeBlock.fontFamily}
                fontColor={block.blockType.typeBlock.fontColor}
                fontSize={block.blockType.typeBlock.fontSize}
                content={block.blockType.typeBlock.content}
                size={block.size}
                // typeCh={'text'}
            />
        }
        return null;
    })

    const figureBlocks = Props.presentation.slides[Props.slideId - 1].blocks.map((block, id) => {
        if (block.blockType.typeBlock.type === "figure") {

            block.size = {
                height: 140,
                width: 140
            }

            if (block.blockType.typeBlock.figureType === "circle") {
                return <Circle
                    key={id}
                    color={block.blockType.typeBlock.color}
                    borderColor={block.blockType.typeBlock.borderColor}
                    size={block.size}
                    // typeCh={'figure'}
                />
            }
            if (block.blockType.typeBlock.figureType === "rectangle") {
                return <Rectangle
                    key={id}
                    color={block.blockType.typeBlock.color}
                    borderColor={block.blockType.typeBlock.borderColor}
                    size={block.size}
                    // typeCh={'figure'}
                />
            }
            if (block.blockType.typeBlock.figureType === "triangle") {
                return <Triangle
                    key={id}
                    color={block.blockType.typeBlock.color}
                    borderColor={block.blockType.typeBlock.borderColor}
                    size={block.size}
                    // typeCh={'figure'}
                />
            }
            return null;
        }
        return null;
    })


    const newBackground: string = Props.presentation.slides[Props.slideId - 1].background.color;
    const style = {
        background: newBackground
    }

    return (
        <div className={styles.workingPlace}>
            <div className={styles.slidePlace} style={style}>
                {textBlocks}
                {figureBlocks}
                {imageBlocks}
            </div>
        </div>
    );
};

export default WorkingPlace;