import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Demo from "./Demo";
import LogIn from "../Pages/Auth/LogIn";
import Registration from "../Pages/Auth/Registration";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home";
import UserFeed from "../Pages/Post/UserFeed";
import CreatePost from "../Pages/Post/CreatePost";
const RootRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="log-in" element={<LogIn />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route element={<Demo />}>
          <Route path="profile" element={<Profile />} />
          <Route path="feed" element={<UserFeed />}>
            <Route path="create" element={<CreatePost />} />
          </Route>
          <Route path="log-out" />
        </Route>
      </Routes>
    </Router>
  );
};

export default RootRouting;
