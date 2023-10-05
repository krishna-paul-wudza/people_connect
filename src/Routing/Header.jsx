import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../Redux/AllSlice/AuthSlice";
import { css } from "@emotion/react";

const LOGO_IMAGE_SRC = "/assets/logo.png";

const Demo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser(navigate));
  };
  return (
    <Container>
      <Logo src={LOGO_IMAGE_SRC} />
      <Title>People Connect</Title>
      {/* <ButtonLink to="/log-in">Log in</ButtonLink>
      <ButtonLink to="/registration">Register</ButtonLink> */}
      <ButtonLink to="/feed" active={pathname === "/feed"}>Feed</ButtonLink>
      <ButtonLink to="/profile/view" active={pathname.startsWith("/profile/")}>Profile</ButtonLink>
      <ButtonLink onClick={handleLogout}>Log Out</ButtonLink>
    </Container>
  );
};

export default Demo;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  padding: 16px 32px;
  background-color: whitesmoke;
`;

const ButtonLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  color: darkgreen;
  padding: 8px 16px;
  margin: 0px 16px;
  transition: all 0.2s linear;
  background-color: bisque;
  border: none;
  text-decoration: none;

  &:hover {
    padding: 8px 32px;
    margin: 0px;
    background-color: darkgreen;
    color: wheat;
  }
  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid darkgreen;
    `}
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: purple;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
