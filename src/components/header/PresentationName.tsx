import React, {useState} from 'react';
import styles from './PresentationName.module.css';
import icon from '../../assets/edit-presentation-name.svg';

const PresentationName = () => {
    let [name, setName] = useState('New presentation');


    return (
        <form className={styles.presentationName}>
            <input
                type="text"
                className={styles.presentationInput}
                value={name}
                id={'presentationName'}
                onChange={event => setName(event.target.value)}
            />
            <button className={styles.presentationEditBtn}>
                <img src={icon} className={styles.icon}/>
            </button>
        </form>
    );
};

export default PresentationName;