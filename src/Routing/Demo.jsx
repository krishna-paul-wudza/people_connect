import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './TopBar.scss'

const Demo = () => {
    return (
        <>
            <div className='TopBar'>
                <NavLink to="/log-in">Log in</NavLink>
                <NavLink to="/registration">Register</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/feed">Feed</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Demo
