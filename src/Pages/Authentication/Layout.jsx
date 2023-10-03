import React from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router";

import IntroBox from "./IntroBox";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from 'react-router-dom'

const Layout = () => {
  const auth = useSelector((state) => state.auth);
  let location = useLocation();

  if (!!auth.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <Container>
      <Content>
        <div>
          <IntroBox />
        </div>
        <div>
          <Outlet />
        </div>
      </Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  margin: auto;
  height: 80%;
  min-height: 600px;
  width: 60%;
  min-width: 800px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    flex: 1;
  }
`;
