import React from 'react';
import styles from './WorkingPlace.module.css';
import CText from './blocks/Text/CText';
import Triangle from "./blocks/figures/Triangle/Triangle";
import Rectangle from "./blocks/figures/Rectangle/Rectangle";
import Circle from "./blocks/figures/Circle/Circle";
import Image from './blocks/Image/Image';

function WorkingPlace(Props: { presentation: Presentation, slideId: number }) {
    const blocks = Props.presentation.slides[Props.slideId - 1].blocks.map((block, id) => {
        if (block.blockType.typeBlock.type === "image") {
            if (block.link !== undefined) {
                return <Image
                    presentation={Props.presentation}
                    slideId={Props.slideId}
                    key={id}
                    size={block.size}
                    imageUrl={block.link}
                    blockId={block.blockId}
                    position={block.position}
                />
            }
        }
        if (block.blockType.typeBlock.type === "text") {
            return <CText
                key={id}
                presentation={Props.presentation}
                slideId={Props.slideId}
                fontFamily={block.blockType.typeBlock.fontFamily}
                fontColor={block.blockType.typeBlock.fontColor}
                fontSize={block.blockType.typeBlock.fontSize}
                content={block.blockType.typeBlock.content}
                fontWeight={block.blockType.typeBlock.fontWeight}
                fontStyle={block.blockType.typeBlock.fontStyle}
                size={block.size}
                blockId={block.blockId}
                position={block.position}
                height={block.size.height}
                width={block.size.width}
            />
        }
        if (block.blockType.typeBlock.type === "figure") {
            if (block.blockType.typeBlock.figureType === "circle") {
                return <Circle
                    presentation={Props.presentation}
                    blockId={block.blockId}
                    slideId={Props.slideId}
                    key={id}
                    color={block.blockType.typeBlock.color}
                    borderColor={block.blockType.typeBlock.borderColor}
                    size={block.size}
                    position={block.position}
                />
            }
            if (block.blockType.typeBlock.figureType === "rectangle") {
                return <Rectangle
                    presentation={Props.presentation}
                    blockId={block.blockId}
                    slideId={Props.slideId}
                    key={id}
                    color={block.blockType.typeBlock.color}
                    borderColor={block.blockType.typeBlock.borderColor}
                    size={block.size}
                    position={block.position}
                />
            }
            if (block.blockType.typeBlock.figureType === "triangle") {
                return <Triangle
                    presentation={Props.presentation}
                    blockId={block.blockId}
                    slideId={Props.slideId}
                    key={id}
                    color={block.blockType.typeBlock.color}
                    borderColor={block.blockType.typeBlock.borderColor}
                    size={block.size}
                    position={block.position}
                />
            }
            return null;
        }
        return null
    })

    const newBackground: BackgroundColor | BackgroundImage = Props.presentation.slides[Props.slideId - 1].background;
    let style;
    if (newBackground.type === 'color') {
        style = {
            background: newBackground.color
        }
    } else {
        style = {
            background: 'url(' + (newBackground.src) + ')',
            backgroundSize: '960px 540px'
        }
    }

    return (
        <div className={styles.workingPlace}>
            <div className={styles.slidePlace} style={style} id={Props.slideId.toString()}>
                {blocks}
            </div>
        </div>
    );
};

export default WorkingPlace;