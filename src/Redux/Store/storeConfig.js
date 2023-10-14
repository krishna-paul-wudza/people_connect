import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../AllSlice/AuthSlice";
import UsersReducer from "../AllSlice/UsersSlice";



const store = configureStore({
    reducer: {
        auth: AuthReducer,
        users: UsersReducer
    }
})

export default store;
