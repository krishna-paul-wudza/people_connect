import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import FeedCard from "./FeedCard";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";

const PostView = () => {
  const { response } = useLoaderData();
  const { _id } = useSelector(state => state.auth)
  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={response}
        errorElement={<div>Error Occured</div>}
        children={(response) => {
          return (
            <>
              <TopBar title="View Post" />
              <FeedCard post={response} id={_id} />
            </>
          );
        }}
      />
    </Suspense>
  );
};

export default PostView;
