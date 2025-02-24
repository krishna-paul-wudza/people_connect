import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Log_In } from '../../Redux/AllSlice/AuthSlice';


const LogIn = () => {
    let dispatch = useDispatch();

    let { isLoading,username,password } = useSelector(state => state.auth);
    console.log("data", isLoading,username,password);

    let [inputState, setInput] = useState({

        username: "",
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



        dispatch(Log_In(inputState));
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' name='username' placeholder='@username' onChange={changeHandler} />
                <input type='password' name='password' placeholder='Password' onChange={changeHandler} />
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default LogIn