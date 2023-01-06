import React from 'react';
import styles from './ToolsPanel.module.css';
import TextTool from "./textTool/TextTool";
import FigureTool from './figureTool/FigureTool';
import ImgTool from './imgTool/ImgTool'
import { ClearTool } from './clearTool/ClearTool';

function ToolsPanel(Props: {presentation: Presentation, slideId: number})  {

    if (Props.presentation.slides[Props.slideId - 1].selectedBlocks.length !== 0) {
        if (Props.presentation.slides[Props.slideId - 1].selectedBlocks[0] !== undefined) {
            if (Props.presentation.slides[Props.slideId - 1].selectedBlocks[0].blockType.typeBlock.type === 'text') {
                return (
                    <div className={styles.toolsPanel}>
                        <TextTool
                            presentation={Props.presentation}
                            slideId={Props.slideId}
                        />
                    </div>
                )
            }

            else if (Props.presentation.slides[Props.slideId - 1].selectedBlocks[0].blockType.typeBlock.type === 'figure') {
                return (
                    <div className={styles.toolsPanel}>
                        <FigureTool
                            presentation={Props.presentation}
                            slideId={Props.slideId}
                        />
                    </div>
                )
            }
            else if (Props.presentation.slides[Props.slideId - 1].selectedBlocks[0].blockType.typeBlock.type === 'image') {
                return  (
                    <div className={styles.toolsPanel}>
                        <ImgTool
                            presentation={Props.presentation}
                            slideId={Props.slideId}
                        />
                    </div>
                )
            }
        }
    }
    return (
        <div className={styles.toolsPanel}>
            <ClearTool />
        </div>
    );
}

export default ToolsPanel;