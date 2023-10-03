import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { redirect } from "react-router-dom";
import services from "../../Services";

const initial_value = {
  isAuthenticated: false,
  // API Parameters
  name: "",
  email: "",
  username: "",
  profilePic: "",
  bio: "",
  _id: "",
  followers: [],
  following: [],
  createdAt: "",
};

export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async ({ inputState, navigate }) => {
    const res = await services.register(
      inputState.name,
      inputState.email,
      inputState.username,
      inputState.password
    );
    if (res.status === 200) {
      window.localStorage.setItem("username", res?.data?.username);
      navigate("/profile");
    }
    return res?.data;
  }
);

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ inputState, navigate }) => {
    const res = await services.login(inputState.username, inputState.password);
    if (res !== null) {
      window.localStorage.setItem("username", res.username);
      navigate("/profile");
    }
    return res;
  }
);

export const syncUserProfile = createAsyncThunk(
  "auth/syncUserProfile",
  async () => {
    const res = await services.getMyProfile();
    return res?.data;
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initial_value,
  reducers: {
    updateProfile: (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.bio = action.payload.bio;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.profilePic = action.payload.profilePic;
      state.createdAt = action.payload.createdAt;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.isAuthenticated = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isAuthenticated = false;
    });
    builder.addCase(syncUserProfile.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state._id = action.payload._id;
      state.bio = action.payload.bio;
      state.followers = action.payload.followers;
      state.following = action.payload.following;
      state.profilePic = action.payload.profilePic;
      state.createdAt = action.payload.createdAt;
    });
  },
});
export const { updateProfile } = AuthSlice.actions;
export default AuthSlice.reducer;
