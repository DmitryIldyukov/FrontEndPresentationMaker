import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { addOnChangeHandler } from './components/editor/Editor';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render() {
    root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
}

render();
addOnChangeHandler(render);
