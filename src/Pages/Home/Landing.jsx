import React, { Suspense, useEffect } from "react";
import { Await, useLoaderData, Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../Redux/AllSlice/AuthSlice";

const Landing = () => {
  const { response } = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (response !== null) dispatch(updateProfile(response));
  }, [response]);
  return (
    <Suspense fallback={<Spinner />}>
      <Await
        resolve={response}
        errorElement={<div>Error Occured</div>}
        children={(response) => {
          if (response === null) {
            <Navigate to="/log_in" />;
          } else {
            return <Navigate to="/feed" />;
          }
        }}
      />
    </Suspense>
  );
};

export default Landing;
