import React, {FormEvent, useState} from 'react';
import icon from '../../assets/edit-presentation-name.svg';
import styles from './PresentationName.module.css';

export type Props = {
    presentationName: string;
    newPresentationName: (name: string) => void;
}

const PresentationName = ({ presentationName, newPresentationName }: Props) => {
    const [name, setName] = useState('New presentation');

    const setTitle = () => {
        newPresentationName(name);
    };

    return (
        <form className={styles.presentationName}>
            <input
                type="text"
                className={styles.presentationInput}
                id={'presentationName'}
                value={name}
                onChange={event => setName(event.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.currentTarget.blur();
                        setTitle();
                    }
                }}
            />
        </form>
    );
};

export default PresentationName;