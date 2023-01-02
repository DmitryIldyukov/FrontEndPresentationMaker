import React, {FormEvent, useState, useRef, useEffect} from 'react';
import styles from './PresentationName.module.css';
import { dispatch } from '../editor/Editor';
import { changePresentationNameHandler } from '../editor/EditorFn';

const  PresentationName = () => {
    const [name, setName] = useState('New presentation');

    function CheckPresentationName(newName: string): string {
        if (newName == "" || newName.length == 0 || newName == null) {
            newName = "Nameless presentation"
            setName(newName);
        }

        return (
            newName
        )
    }
    return (
        <div className={styles.presentationName}>
            <input
                type="text"
                className={styles.presentationInput}
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => {
                    e.currentTarget.select();
                }}
                onSubmit={() => changePresentationNameHandler(CheckPresentationName(name))}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        changePresentationNameHandler(CheckPresentationName(name));
                        e.currentTarget.blur();
                    }
                }}
                
            />
        </div>
    );
};

export default PresentationName;