import React from 'react';
import styles from "./Presentation.module.css";
import ToolBar from "../toolBar/ToolBar";
import Header from "../header/Header";
import SlideList from "../slideList/SlideList";
import WorkingPlace from "../wordingPlace/WorkingPlace";
import ToolsPanel from "../toolsPanel/ToolsPanel";

const Presentation = () => {
    return (
        <div className="App">
            <Header />
            <ToolBar />
            <div className={styles.mainPart}>
                <SlideList />
                <WorkingPlace />
                <ToolsPanel />
            </div>
        </div>
    );
};

export default Presentation;