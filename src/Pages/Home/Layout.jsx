import React, { Suspense, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Await,
  Navigate,
  Outlet,
  useLoaderData,
  useLocation,
  redirect,
} from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../Redux/AllSlice/AuthSlice";

const Layout = () => {
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
            redirect("/log-in");
            return null;
          } else {
            return (
              <Container>
                <Outlet />
              </Container>
            );
          }
        }}
      />
    </Suspense>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 16px 160px;
  flex: 1;
  background-color: aqua;
  gap: 16px;
`;
