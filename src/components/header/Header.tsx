import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import PresentationName from "./PresentationName";
import { createPresentationHandler, changePresentationNameHandler } from '../editor/EditorFn';

export function Header(Props: { presentation: Presentation }) {
    return (
        <div className={styles.header}>
            <img className={styles.headerLogo} src={logo} alt=""/>
            <div className={styles.headerMenu}>
                <PresentationName presentation={Props.presentation}/>
                <ul className={styles.headerToolList}>
                    <li className={styles.headerTool}>
                        <button onClick={createPresentationHandler} className={styles.headerButton}>Создать</button>
                    </li>
                    <li className={styles.headerTool}>
                        <button className={styles.headerButton}>Открыть</button>
                    </li>
                    <li className={styles.headerTool}>
                        <button className={styles.headerButton}>Сохранить</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;