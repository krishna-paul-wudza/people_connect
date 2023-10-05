import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Await, Outlet, useLoaderData, useLocation } from "react-router-dom";
import FeedCard from "./FeedCard";

const Feed = () => {
  const { feed } = useLoaderData();
  return (
    <>
      <Outlet />
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
              return posts.map((post) => <FeedCard key={post._id} {...post} />);
          }}
        />
      </Suspense>
    </>
  );
};

export default Feed;
