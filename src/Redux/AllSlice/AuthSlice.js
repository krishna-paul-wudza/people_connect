import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { redirect } from "react-router-dom";

const reg_api = "http://localhost:5000/api/users/signup";
const login_api = "http://localhost:5000/api/users/login";
const profile_api = (username) => `http://localhost:5000/api/users/profile/${username}`;


const initial_value = {
    isLoading: false,
    error: null,
    // API Parameters
    name: "",
    email: "",
    username: "",
    password: "",
    profilePic: "",
    bio: ""
    // 

}

export const Sign_Up = createAsyncThunk("auth/Registration",
    async (userdata) => {
        const res = await axios.post(reg_api, userdata)
        window.localStorage.setItem("username", res?.data?.username);
        return res?.data;
    })

export const Log_In = createAsyncThunk("auth/Log_In",
    async ({inputState: userdata, navigate}) => {
        const res = await axios.post(login_api, userdata)
        console.log("Log_In", res);
        if (res.status === 200) {
            window.localStorage.setItem("username", res?.data?.username)
            const redirect_response = navigate("/profile");
            console.log("redirect_response", redirect_response);

        }
        return res?.data;
    }
)

export const User_Profile = createAsyncThunk("auth/User_Profile",
    async () => {
        const UserData = window.localStorage.getItem("username");
        const res = await axios.get(profile_api(UserData))
        return res?.data;

    }
)



export const AuthSlice = createSlice({
    name: "auth",
    initialState: initial_value,
    extraReducers: (builder) => {
        builder.addCase(Sign_Up.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(Sign_Up.fulfilled, (state, action) => {
            console.log("Action", action);
            state.isLoading = false;
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
        })
        builder.addCase(Sign_Up.rejected, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(Log_In.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(Log_In.fulfilled, (state, action) => {
            console.log('Log_In fulfiled',state, action)
            state.isLoading = false;
            state.username = action.payload.username;
            state.password = action.payload.password;

        })
        builder.addCase(Log_In.rejected, (state, action) => {
            state.isLoading = false;

        })

        builder.addCase(User_Profile.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(User_Profile.fulfilled, (state, action) => {
            console.log("action", action.payload);
            state.isLoading = false;
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.email = action.payload.email;
        })

        builder.addCase(User_Profile.rejected, (state, action) => {
            state.isLoading = false;
        })

    }
})


export default AuthSlice.reducer;
