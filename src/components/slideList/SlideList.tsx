import React from 'react';
import Slide from './Slide';
import styles from './SlideList.module.css';

export function SlideList( Props: { slideList: TSlide[], selectedSlides: TSlide[] }) {

    const slides = Props.slideList.map((slide, id) => (
        <Slide key={id} slideId={slide.slideId} isSelectedSlide={Props.selectedSlides.some((Slide) => Slide.slideId === slide.slideId)} />
    ));

    return (
        <ul className={styles.slideList}>
            {slides}
        </ul>
    );

}

export default SlideList;
