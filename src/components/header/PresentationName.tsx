import React, { useState, useEffect } from 'react';
import styles from './PresentationName.module.css';
import { changePresentationNameHandler } from '../editor/EditorFn';

const  PresentationName = (Props: {presentation:Presentation}) => {
    const [name, setName] = useState(Props.presentation.presentationName);

    useEffect(() => {
        setName(Props.presentation.presentationName);
    }, [Props.presentation.presentationName]);

    function CheckPresentationName(newName: string): string {
        if (newName === "" || newName === null || newName === undefined) {
            newName = "Nameless presentation";
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