import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import FeedCard from "./FeedCard";
import TopBar from "./TopBar";

const PostView = () => {
  const { response } = useLoaderData();
  console.log({response})
  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={response}
        errorElement={<div>Error Occured</div>}
        children={(response) => {
          console.log("PostView response: ", response);
          return (
            <>
              <TopBar title="View Post" />
              <FeedCard {...response} />
            </>
          );
        }}
      />
    </Suspense>
  );
};

export default PostView;
