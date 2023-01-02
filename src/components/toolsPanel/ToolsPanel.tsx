import React from 'react';
import styles from './ToolsPanel.module.css';
import TextTool from "./textTool/TextTool";
import FigureTool from './figureTool/FigureTool';
import ImgTool from './imgTool/ImgTool'
import { ClearTool } from './clearTool/ClearTool';

const ToolsPanel = () => {
    return (
        <div className={styles.toolsPanel}>
            <ClearTool />
            {/* <TextTool />
            <ImgTool/>
            <FigureTool/> */}
        </div>
    );
};

export default ToolsPanel;