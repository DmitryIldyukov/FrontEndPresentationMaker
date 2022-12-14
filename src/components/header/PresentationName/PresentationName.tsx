import React, {useState, useEffect} from 'react';
import styles from './PresentationName.module.css';
import {dispatch} from "../../editor/Editor";
import {changePresentationName} from "../../editor/editorFunctions";
import {updateHistory} from "../../hooks/undoRedo";

const PresentationName = (Props: { presentation: Presentation }) => {
    const [name, setName] = useState(Props.presentation.presentationName);

    useEffect(() => {
        setName(Props.presentation.presentationName);
    }, [Props.presentation.presentationName]);

    function CheckPresentationName(newName: string): string {
        if (newName === "" || newName === null || newName === undefined) {
            newName = "Без имени";
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
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        dispatch(updateHistory, {})
                        dispatch(changePresentationName, (CheckPresentationName(name)));
                        e.currentTarget.blur();
                    }
                }}
            />
        </div>
    );
};

export default PresentationName;