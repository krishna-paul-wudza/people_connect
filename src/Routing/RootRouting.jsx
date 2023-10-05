import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  defer,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile/Profile";
import UserFeed from "../Pages/Post/UserFeed";
import CreatePost from "../Pages/Post/CreatePost";
import Auth from "../Pages/Authentication";
import Services from "../Services";
import { getPostById } from "../Services/getPostById";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        exact
        path=""
        element={<Home.Landing />}
        errorElement={<Navigate to="/log-in" />}
        loader={async () => {
          const response = await Services.getMyProfile();
          return defer({ response });
        }}
      />
      <Route element={<Home.Layout />}>
        <Route
          path="profile"
          element={<Home.Profile />}
          loader={async () => {
            const response = await Services.getMyPosts();
            return defer({ feed: response });
          }}
        >
          <Route path="edit" element={<Home.ProfileEdit />} />
          <Route path="view" element={<Home.ProfileView />} />
        </Route>
        <Route
          path="feed"
          element={<Home.Feed />}
          loader={async () => {
            const response = await Services.getFeedPosts();
            return defer({ feed: response });
          }}
        >
          <Route path="create" element={<Home.CreatePost />} />
          <Route path="post/:postId" element={<Home.PostView />} errorElement={(err) => {
            <div>{err}</div>
          }} loader={async ({params}) => {
            console.log("params.postId", params.postId);
            const response = await getPostById(params.postId)
            return defer({response })
          }} />
        </Route>
      </Route>
      <Route element={<Auth.Layout />}>
        <Route path="log-in" element={<Auth.LogIn />} />
        <Route path="registration" element={<Auth.Registration />} />
      </Route>
    </>
  )
);
const RootRouting = () => {
  return <RouterProvider router={router} />;
};

export default RootRouting;
