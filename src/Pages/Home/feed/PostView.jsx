import React, { Suspense, useEffect } from "react";
import { Await, useLoaderData, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PostView = () => {
  const { response } = useLoaderData();
  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={response}
        errorElement={<div>Error Occured</div>}
        children={(response) => {
          console.log("PostView response: ", response);
          return <div>post view</div>;
        }}
      />
    </Suspense>
  );
};

export default PostView;
