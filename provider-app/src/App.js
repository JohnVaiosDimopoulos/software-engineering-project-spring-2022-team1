import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import ActionBar from './components/ActionBar.js';
import ActivityPage from './components/ActivityPage.js';
import ActivitiesPage from './components/ActivitiesPage.js';
import FacilitiesPage from './components/FacilitiesPage.js';
import ProfilePage from './components/ProfilePage';
import AddActivityPage from './components/AddActivityPage.js';
import StatisticsPage from "./components/StatisticsPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <React.StrictMode>
      <div class='flex'>
        <BrowserRouter>
          <ActionBar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="activities" element={<ActivitiesPage/>}/>
            <Route path="activity" element={<ActivityPage/>}/>
            <Route path="facilities" element={<FacilitiesPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="add-activity" element={<AddActivityPage/>}/>
            <Route path="statistics" element={<StatisticsPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  )
}

export default App;
