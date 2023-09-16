import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../AllSlice/AuthSlice";



const store = configureStore({
    reducer: {
        auth: AuthReducer,
    }
})

export default store;