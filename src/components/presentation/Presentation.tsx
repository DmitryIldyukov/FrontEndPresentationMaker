import React from 'react';
import styles from "./Presentation.module.css";
import ToolBar from "../toolBar/ToolBar";
import Header from "../header/Header";
import SlideList from "../slideList/SlideList";
import WorkingPlace from "../wordingPlace/WorkingPlace";
import ToolsPanel from "../toolsPanel/ToolsPanel";
import {getState} from "../editor/Editor";

const Presentation = () => {
    const presentation: Presentation = getState();
    const presentationSlideList: TSlide[] = presentation.slides;
    const presentationSelectedSlideList: TSlide[]= presentation.selectedSlides;

    return (
        <div className="App">
            <Header presentation={presentation}/>
            <ToolBar presentation={presentation}/>
            <div className={styles.mainPart}>
                <SlideList slideList={presentationSlideList} selectedSlides={presentationSelectedSlideList}/>
                <WorkingPlace />
                <ToolsPanel />
            </div>
        </div>
    );
};

export default Presentation;