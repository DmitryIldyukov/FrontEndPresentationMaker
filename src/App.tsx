import React from 'react';
import logo from './logo.svg';
import styles from "./App.module.css";
import Header from "./components/header/Header";
import ToolBar from "./components/toolBar/ToolBar";
import SlideList from "./components/slideList/SlideList";
import WorkingPlace from "./components/wordingPlace/WorkingPlace";
import ToolsPanel from "./components/toolsPanel/ToolsPanel";

function App() {
  return (
    <div className="App">
      <Header/>
      <ToolBar />
      <div className={styles.mainPart}>
        <SlideList />
        <WorkingPlace />
        <ToolsPanel />
      </div>
    </div>
  );
}

export default App;
