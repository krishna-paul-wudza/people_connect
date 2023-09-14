import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Demo from './Demo';
import LogIn from '../Pages/Login/LogIn';
const RootRouting = () => {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Demo />} />
                <Route element={<Demo />} >
                    <Route path='log-in' element={<LogIn />} />

                    <Route path='log-out' />
                </Route>
            </Routes>
        </Router>
    )
}

export default RootRouting