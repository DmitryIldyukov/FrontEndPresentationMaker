export function updateHistory(editor: Editor): Editor {
    const newEditor: Editor = {
        ...editor,
        history: {
            ...editor.history,
            index: editor.history.index + 1,
        },
    };

    const newStates = newEditor.history.states.filter((value, id) =>
        id <= newEditor.history.index && value)

    newEditor.history.states = [...newStates, editor.presentation]

    return newEditor;
}

export function undo(editor: Editor): Editor {
    const newEditor: Editor = {
        ...editor,
    }

    if (editor.history.index > 0) {
        newEditor.history.index = editor.history.index - 1;
        newEditor.presentation = editor.history.states[newEditor.history.index];
    }

    return newEditor;
}

export function redo(editor: Editor): Editor {
    const newEditor: Editor = {
        ...editor,
    }

    if (editor.history.index < editor.history.states.length - 1) {
        newEditor.history.index = editor.history.index + 1;
        newEditor.presentation = editor.history.states[newEditor.history.index];
    }

    return newEditor;
}