import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import {
  Await,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import FeedCard from "./FeedCard";
import styled from "@emotion/styled";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Feed = () => {
  const { feed } = useLoaderData();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isExact = pathname === "/feed";
  if (!isExact) {
    return <Outlet />;
  }
  const handleCreatePostButtonClick = () => {
    navigate("create");
  };
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <Await
        resolve={feed}
        errorElement={<div>Error Occured</div>}
        children={(posts) => {
          if (posts === null || posts.length === 0) {
            return <div>No posts available in feed.</div>;
          } else
            return (
              <>
                <CreatePostButton onClick={handleCreatePostButtonClick}>
                  <AddCircleOutlineIcon size={25} />
                  <span>Create New Post</span>
                </CreatePostButton>
                {posts.map((post) => (
                  <FeedCard key={post._id} {...post} />
                ))}
              </>
            );
        }}
      />
    </Suspense>
  );
};

export default Feed;
const CreatePostButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  cursor: pointer;

  position: fixed;
  bottom: 30px;
  right: 30px;

  border-radius: 32px;
  padding: 8px 16px;
  border: 1px solid aqua;
  background-color: azure;

  & > span {
    font-size: 16px;
  }
`;
