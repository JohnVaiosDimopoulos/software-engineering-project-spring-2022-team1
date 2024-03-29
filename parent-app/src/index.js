import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Index } from './pages/Index';
import { ActivityPage } from './pages/ActivityPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { ProfilePage } from './pages/ProfilePage';
import { ReservationsPage } from './pages/ReservationsPage';
import { UpcomingActivitiesPage } from './pages/UpcomingActivitiesPage';
import { WalletPage } from './pages/WalletPage';
import { NotFound } from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Index />}/>
                    <Route path="activities">
                        <Route path=":activityId" element={<ActivityPage/>} />
                    </Route>
                    <Route path="searchActivity" element={<SearchResultsPage/>} />
                    <Route path="profile">
                        <Route index element={<ProfilePage/>}/>
                        <Route path="history" element={<ReservationsPage/>}/>
                        <Route path="upcoming" element={<UpcomingActivitiesPage/>}/>
                        <Route path="wallet" element={<WalletPage/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
