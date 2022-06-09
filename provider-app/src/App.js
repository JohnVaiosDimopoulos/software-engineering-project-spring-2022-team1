import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import React from 'react';
import ActionBar from './components/ActionBar.js';
import ActivityPage from './components/ActivityPage.js';
import HomePage from "./components/HomePage";

function App() {
  return (
      <div class='flex text-center'>
        <ActionBar />
        <HomePage />
      </div>
  )
}

export default App;