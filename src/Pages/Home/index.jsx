import React from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router";

import IntroBox from "./IntroBox";

const Home = () => {
  return (
    <HomeContainer>
      <ContentContainer>
        <div>
          <IntroBox />
        </div>
        <div>
          <Outlet />
        </div>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ContentContainer = styled.div`
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
