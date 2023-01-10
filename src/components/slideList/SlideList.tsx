import React from 'react';
import Slide from './Slide';
import styles from './SlideList.module.css';

export function SlideList( Props: { presentation: Presentation, slideList: TSlide[], selectedSlides: TSlide[] }) {

    const slides = Props.slideList.map((slide, id) => (
        <Slide
            presentation={Props.presentation}
            key={id}
            slideId={slide.slideId}
            isSelectedSlide={Props.selectedSlides.some((Slide) => Slide.slideId === slide.slideId)}
            background={slide.background.type}
            blockList={slide.blocks}
        />
    ));

    return (
        <ul className={styles.slideList}>
            {slides}
        </ul>
    );

}

export default SlideList;
