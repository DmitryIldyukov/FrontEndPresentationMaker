import React from 'react';
import styles from './Slide.module.css';
import SlideCircle from "../../workingPlace/blocks/figures/Circle/SlideCircle";
import SlideRectangle from "../../workingPlace/blocks/figures/Rectangle/SlideRectangle";
import SlideTriangle from "../../workingPlace/blocks/figures/Triangle/SlideTriangle";
import SlideImage from "../../workingPlace/blocks/Image/SlideImage";
import SlideText from "../../workingPlace/blocks/Text/SlideText";
import {dispatch} from "../../editor/Editor";
import {selectSlide, selectSlides} from "./slideFunctions";

const Slide = (Props: {
    presentation: Presentation,
    slideId: number,
    isSelectedSlide: boolean,
    background: string,
    blockList: Block[]
}) => {
    const blocks = Props.blockList.map((block, id) => {
        if (block.blockType.typeBlock.type === "text") {
            return <SlideText
                key={id}
                presentation={Props.presentation}
                slideId={Props.slideId}
                fontFamily={block.blockType.typeBlock.fontFamily}
                fontColor={block.blockType.typeBlock.fontColor}
                fontSize={block.blockType.typeBlock.fontSize}
                content={block.blockType.typeBlock.content}
                fontWeight={block.blockType.typeBlock.fontWeight}
                fontStyle={block.blockType.typeBlock.fontStyle}
                height={block.size.height}
                width={block.size.width}
                blockId={block.blockId}
                position={block.position}
            />
        }
        if (block.blockType.typeBlock.type === "image") {

            if (block.link !== undefined) {
                return <SlideImage
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
        if (block.blockType.typeBlock.type === 'figure') {
            if (block.blockType.typeBlock.figureType === 'circle') {
                return <SlideCircle
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
            if (block.blockType.typeBlock.figureType === 'rectangle') {
                return <SlideRectangle
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
            if (block.blockType.typeBlock.figureType === 'triangle') {
                return <SlideTriangle
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
            return null
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
            backgroundSize: '195px 109px'
        }
    }

    return (
        <li
            onClick={(e) => {
                if (e.ctrlKey) {
                    dispatch(selectSlides, Props.slideId - 1)
                } else {
                    dispatch(selectSlide, Props.slideId - 1)
                }
            }}
            className={styles.slideContainer}
            key={Props.slideId}
        >
            <div className={styles.slideMainPart + " " + (Props.isSelectedSlide ? styles.slideChecked : undefined)}>
                <div className={styles.slideTool}>
                    <span className={styles.slideNumber}>{Props.slideId}</span>
                </div>
                <div className={styles.slide} style={style}>
                    <div className={styles.blocks}>{blocks}</div>
                </div>
            </div>
        </li>
    )
}

export default Slide;