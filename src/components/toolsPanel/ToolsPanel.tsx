import React from 'react';
import styles from './ToolsPanel.module.css';
import TextTool from "./textTool/TextTool";

const ToolsPanel = () => {
    return (
        <div className={styles.toolsPanel}>
            <TextTool />
        </div>
    );
};

export default ToolsPanel;