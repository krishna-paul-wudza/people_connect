import React from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import Header from '../../Routing/Header'

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
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
  background-color: pink;
  gap: 8px;
`;
