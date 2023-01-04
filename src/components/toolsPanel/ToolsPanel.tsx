import React from 'react';
import styles from './ToolsPanel.module.css';
import TextTool from "./textTool/TextTool";
import FigureTool from './figureTool/FigureTool';
import ImgTool from './imgTool/ImgTool'
import { ClearTool } from './clearTool/ClearTool';

function ToolsPanel(Props: {presentation: Presentation})  {

    if (Props.presentation.chosen === 'text') {
        return (
            <div className={styles.toolsPanel}>
                <TextTool />
            </div>
        );
    }
    else if (Props.presentation.chosen === 'figure') {
        return (
            <div className={styles.toolsPanel}>
                <FigureTool />
            </div>
        );
    }
    else if (Props.presentation.chosen === 'image') {
        return  (
            <div className={styles.toolsPanel}>
                <ImgTool />
            </div>
        )
    }
    else
        return (
            <div className={styles.toolsPanel}>
                <ClearTool />
            </div>
        );
}

export default ToolsPanel;