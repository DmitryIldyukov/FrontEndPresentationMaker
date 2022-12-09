import React, {useState} from 'react';
import Header from "./Header";
import fileImg from '../../assets/file.svg';
import styles from './Header.module.css';

// const FileActions = () => {
//     const [menuActive, setMenuActive] = useState(false);
//     const items = [{value: "Создать"}, {value: "Открыть"}, {value: "Сохранить"}]
//
//     return (
//         <div>
//             <Header active={menuActive} setActive={setMenuActive} mainBtn={
//                 <button className={styles.header__second} onClick={() => setMenuActive(!menuActive)}>
//                     <img className={styles.header__file} src={fileImg}/>
//                 </button>
//             }
//                     items={items}
//             />
//         </div>
//     );
// };

// export default FileActions;