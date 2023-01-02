import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import PresentationName from "./PresentationName";
import fileImg from '../../assets/file.svg';

export function Header(Props: { presentation: Presentation }) {
    return (
        <div className={styles.header}>
            <img className={styles.headerLogo} src={logo} alt=""/>
            <div className={styles.headerMenu}>
                <PresentationName />
                {/* <button className={styles.headerSecond}><img className={styles.headerFile} src={fileImg}/></button> */}
                <ul className={styles.headerToolList}>
                    <li className={styles.headerTool}>
                        <button className={styles.headerButton}>Создать</button>
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