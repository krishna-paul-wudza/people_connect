import React from 'react'
import { Outlet } from 'react-router-dom'

const Demo = () => {
    return (
        <>
            <div>Demo</div>
            <Outlet />
        </>
    )
}

export default Demo