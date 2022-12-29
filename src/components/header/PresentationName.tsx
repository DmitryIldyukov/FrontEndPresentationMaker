import React, {FormEvent, useState} from 'react';
import icon from '../../assets/edit-presentation-name.svg';
import styles from './PresentationName.module.css';
import { dispatch } from '../editor/Editor';

export type Props = {
    firstPresentationName: string;
    newPresentationName: (name: string) => void;
}

function changePresentationName(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        presentationName: newName
    }
}

const  PresentationName = () => {
    const [name, setName] = useState('New presentation');

    function submitNewPresentationName() {
        dispatch(changePresentationName, setName);
    }

    return (
        <form className={styles.presentationName}>
            <input
                type="text"
                className={styles.presentationInput}
                id={'presentationName'}
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </form>
    );
};

export default PresentationName;