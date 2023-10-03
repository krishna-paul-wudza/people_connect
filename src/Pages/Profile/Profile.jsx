import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { syncUserProfile } from "../../Redux/AllSlice/AuthSlice";
import axios from "axios";

const Profile = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const fetchPostAPI = "http://localhost:5000/api/posts/myPosts";
    const response = await axios.get(fetchPostAPI, { withCredentials: true });
    if (response?.data) {
      setPosts(response.data.feedPosts);
    }
  };
  const { isLoading, username, name, email } = useSelector((state) => state.auth);
  useEffect(() => {
    fetchPosts();
    dispatch(syncUserProfile());
  }, []);
  return (
    <div>
      Profile
      <h1>{username}</h1>
      {posts?.map((post) => (
        <div>
          <p>{post.text}</p>
          <p>{post.img}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
