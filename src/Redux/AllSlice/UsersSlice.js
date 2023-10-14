import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Services from "../../Services";

const initial_value = {};

export const loadUser = createAsyncThunk("loadUser", async (userId) => {
  const userProfile = await Services.getUserProfileById(userId);
  return userProfile;
});

const UsersSlice = createSlice({
  name: "users",
  initialState: initial_value,
    extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, action) => {
      if (action.payload !== null) {
        state[action.payload._id] = action.payload
      }
    });
  },
});

export default UsersSlice.reducer;
