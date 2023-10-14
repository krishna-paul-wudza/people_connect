import React from "react";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const Landing = () => {
  const { isAuthenticating, isAuthenticated } = useSelector(state => state.auth)
  if (isAuthenticating) {
    return <Spinner />
  }
  if (isAuthenticated) {
    return <Navigate to="/feed" />;
  } else {
    return <Navigate to="/log_in" />;
  }
};

export default Landing;
