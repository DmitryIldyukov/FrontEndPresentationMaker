import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import PresentationName from "./PresentationName";
import { createPresentationHandler } from '../editor/EditorFn';
import {saveAsJsonHandler, openJsonHandler} from '../editor/EditorFn'

export function Header(Props: { presentation: Presentation }) {
    const fileChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) 
        {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                let result = reader.result
                if (typeof result === 'string') {
                    openJsonHandler(result);
                }
            }
        }
    }
    return (
        <div className={styles.header}>
            <img className={styles.headerLogo} src={logo} alt=""/>
            <div className={styles.headerMenu}>
                <PresentationName presentation={Props.presentation}/>
                <ul className={styles.headerToolList}>
                    <li className={styles.headerTool}>
                        <button onClick={createPresentationHandler} className={styles.headerButton}>Создать</button>
                    </li>
                    <li className={styles.headerButton}> Открыть
                      <div className={styles.headerButtonContainer}>
                            <input
                                onChange={fileChangeHandle}
                                id='json-file-handler'
                                type='file'
                                accept='.json'
                                className={styles.headerButtonInput}
                            />
                        </div>
                    </li>
                    <li className={styles.headerTool}>
                        <button  onClick={saveAsJsonHandler} className={styles.headerButton}>Сохранить</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;