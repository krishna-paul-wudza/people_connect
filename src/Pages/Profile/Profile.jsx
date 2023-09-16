import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { User_Profile } from '../../Redux/AllSlice/AuthSlice';

const Profile = () => {
    let dispatch = useDispatch();

    let { isLoading, username, name, email } = useSelector(state => state.auth);
    console.log("All data", username, name, isLoading, email);
    useEffect(() => {
        dispatch(User_Profile())
    }, [])
    return (
        <div>Profile
            <h1>{username}</h1>
        </div>
    )
}

export default Profile