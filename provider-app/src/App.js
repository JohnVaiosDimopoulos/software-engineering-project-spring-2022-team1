import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import ActionBar from './components/ActionBar.js';
import ActivityPage from './components/ActivityPage.js';
import HomePage from "./components/HomePage";

function App() {
  return (
    <React.StrictMode>
      <div class='flex'>
        <BrowserRouter>
          <ActionBar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="activities" element={<ActivityPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  )
}

export default App;
