import React from 'react';
import styles from './ToolsPanel.module.css';
import TextTool from "./textTool/TextTool";
import FigureTool from './figureTool/FigureTool';
import ImgTool from './imgTool/ImgTool'

const ToolsPanel = () => {
    return (
        <div className={styles.toolsPanel}>
            <TextTool />
            <ImgTool/>
            <FigureTool/>
        </div>
    );
};

export default ToolsPanel;