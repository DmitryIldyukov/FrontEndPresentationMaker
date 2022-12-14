import React from 'react';
import styles from "./PresentationComponent.module.css";
import ToolBar from "../toolBar/ToolBar";
import Header from "../header/Header";
import SlideList from "../slideList/SlideList";
import WorkingPlace from "../workingPlace/WorkingPlace";
import ToolsPanel from "../toolsPanel/ToolsPanel";
import {getState} from "../editor/Editor";

const PresentationComponent = () => {
    const editor: Editor = getState();
    const presentation: Presentation = editor.presentation;
    const presentationSlideList: TSlide[] = presentation.slides;
    const presentationSelectedSlideList: TSlide[] = presentation.selectedSlides;

    return (
        <div className="App">
            <Header presentation={presentation}/>
            <ToolBar editor={editor}/>
            <div className={styles.mainPart}>
                <SlideList presentation={presentation} slideList={presentationSlideList}
                           selectedSlides={presentationSelectedSlideList}/>
                <WorkingPlace presentation={presentation} slideId={presentation.selectedSlides[0].slideId}/>
                <ToolsPanel presentation={presentation} slideId={presentation.selectedSlides[0].slideId}/>
            </div>
        </div>
    );
};

export default PresentationComponent;