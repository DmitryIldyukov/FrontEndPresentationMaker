import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import PresentationName from "./PresentationName";
import fileImg from '../../assets/file.svg';

interface IItem {
    value: string;
}

type Props = {
    mainBtn: React.ReactNode;
    items: IItem[];
    active: boolean;
    setActive: (e: boolean) => void;
}

// const Header = ({mainBtn, items, active, setActive}: Props) => {
const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.headerLogo} src={logo} alt=""/>
            <div className={styles.headerMenu}>
                <PresentationName />
                {/*{mainBtn}*/}
                <button className={styles.headerSecond}><img className={styles.headerFile} src={fileImg}/></button>
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
                {/*<ul className={active ? styles.header__toolList + styles.active : styles.header__toolList}>*/}
                {/*    {items.map(item =>*/}
                {/*        <li className={styles.header__tool}>*/}
                {/*            <button className={styles.header__button}>{item.value}</button>*/}
                {/*        </li>*/}
                {/*    )}*/}
                {/*</ul>*/}
            </div>
        </div>
    );
};

export default Header;