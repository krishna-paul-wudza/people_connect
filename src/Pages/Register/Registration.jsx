import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Sign_Up } from '../../Redux/AllSlice/AuthSlice';

const Registration = () => {
    let dispatch = useDispatch();

    const { isLoading } = useSelector(state => state.auth)
    console.log("data", isLoading);

    let [inputState, setInput] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const changeHandler = (event) => {
        event.persist();
        let { name, value } = event.target;
        setInput({ ...inputState, [name]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Data submit :", inputState)



        dispatch(Sign_Up(inputState));
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' name='name' placeholder='FullName' onChange={changeHandler} />
                <input type='text' name='username' placeholder='@username' onChange={changeHandler} />
                <input type='email' name='email' placeholder='Email' onChange={changeHandler} />
                <input type='password' name='password' placeholder='Password' onChange={changeHandler} />
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default Registration