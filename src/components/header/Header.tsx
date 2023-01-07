import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import PresentationName from "./PresentationName";
import { createPresentationHandler } from '../editor/EditorFn';
import {saveAsJsonHandler, openJsonHandler} from '../editor/EditorFn'

export function Header(Props: { presentation: Presentation }) {
    const fileChangeHandle = (e: any) => {
        const file: any  = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            let result = reader.result
            if (typeof result === 'string') {
                openJsonHandler(result);
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
                    <label htmlFor='json-file-handler' className={styles.headerButton}>Открыть</label>
                <input
                    onChange={fileChangeHandle}
                    id='json-file-handler'
                    type='file'
                    accept='.json'
                    className={styles.headerButton}
                />
                    <li className={styles.headerTool}>
                        <button  onClick={saveAsJsonHandler} className={styles.headerButton}>Сохранить</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;