import axios from 'axios';
import React, { useState } from 'react'

const UserFeed = () => {

    const post_api = "http://localhost:5000/api/posts/create";
    const [inputState, setInput] = useState({
        text: "",
        img: ""

    });

    const changeHandeler = (e) => {

        e.persist();
        let { name, value } = e.target;
        setInput({ ...inputState, [name]: value })
    }

    const submitHandeler = (e) => {
        e.preventDefault();
        console.log("collect state", inputState);
        console.log("data submit", inputState);

        axios
            .post(post_api,inputState, {withCredentials: true})

            .then(res => {
                alert("post done");
                console.log("add res", res);
                // if (res.data.status === 200) {
                   
                // }
            })

            .catch(err => {
                alert("error in post");
                console.log("add err", err);
            })

    }

    return (
        <div>
            <form onSubmit={submitHandeler}>
                <input type='text' name='text' onChange={changeHandeler} />
                <input type='text' name='img' onChange={changeHandeler} />
                <button type='text'>Post</button>
            </form>
        </div>
    )
}

export default UserFeed
