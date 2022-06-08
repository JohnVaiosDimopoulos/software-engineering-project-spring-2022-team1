import { Routes, Route, Router } from "react-router-dom";

import './App.css';
import React from 'react';
import ActionBar from './components/ActionBar.js';
import ActivityPage from './components/ActivityPage.js';

function App() {
  return (
    <React.Fragment>
      <div class='flex'>
        <ActionBar />
        <ActivityPage />
      </div>
    </React.Fragment>
  )
}

export default App;