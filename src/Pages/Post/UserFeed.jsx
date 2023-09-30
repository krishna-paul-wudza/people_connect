import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom'

const UserFeed = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([])
    const handleCreatePostClick = () => {
        navigate('/feed/create')
    }
    const fetchPosts = async () => {
        const fetchPostAPI = "http://localhost:5000/api/posts/feed"
        const response = await axios.get(fetchPostAPI, { withCredentials: true })
        if (response?.data) {
            setPosts(response.data.feedPosts);
        }
    }
    useEffect(() => {
        fetchPosts();
    }, [])
  return (
    <div>
      <Outlet />
      <button onClick={handleCreatePostClick}>Create Post</button>
      {posts?.map((post) => (
        <div>
          <p>{post.text}</p>
          <p>{post.img}</p>
        </div>
      ))}
    </div>
  );
};

export default UserFeed;
