import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { addOnChangeHandler } from './components/editor/Editor';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render() {
    root.render(
          <App />
      );
}

render();
addOnChangeHandler(render);
