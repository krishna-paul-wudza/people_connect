import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const ProfileView = () => {
  const { name, username, email, bio, createdBy, followers, following } = useSelector(
    (state) => state.auth
  );
  return (
    <Stack>
      <Stack isColumn justifyContent="flex-start" alignItems="stretch">
        <Stack>
          <Name>{name}</Name>
        </Stack>
        <Stack>
          <SmallText>Username: @{username}</SmallText>
        </Stack>
        <Stack>
          <SmallText>Email: {email}</SmallText>
        </Stack>
        <Stack>
          <SmallText>Bio: {bio}</SmallText>
        </Stack>
        <Stack>
          <SmallText>Account Created: {createdBy}</SmallText>
        </Stack>
        <Stack justifyContent="flex-start">
          <StatsButton label="followers" value={followers.length} />
          <StatsButton label="following" value={following.length} />
        </Stack>
      </Stack>
      <Stack isColumn>
        <ProfilePic src="https://placehold.co/400" />
        <EditButton>Edit Profile</EditButton>
      </Stack>
    </Stack>
  );
};

export default ProfileView;

const Stack = styled.div`
  display: flex;
  flex-direction: ${(props) => (!!props?.isColumn ? "column" : "row")};
  justify-content: ${(props) => props.justifyContent ?? "space-between"};
  align-items: ${(props) => props.alignItems ?? "center"};
  gap: 8px;
`;

const ProfilePic = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: contain;
  border-radius: 100px;
`;

const Name = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

const SmallText = styled.div`
  font-size: 20px;
  color: black;
`;

const EditButton = styled.div`
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  background-color: blue;
  color: whitesmoke;
  border-radius: 4px;
`;

const StatsButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  width: 200px;
  background-color: darkgray;
`;

const StatsButtonLabel = styled.div`
  font-size: 16px;
  color: whitesmoke;
  margin-left: 16px;
`;

const StatsButtonValue = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
  padding: 8px;
  border-left: 1px solid darkgray;
`;

const StatsButton = ({ label, value }) => {
  return (
    <StatsButtonWrapper>
      <StatsButtonLabel>{label}</StatsButtonLabel>
      <StatsButtonValue>{value}</StatsButtonValue>
    </StatsButtonWrapper>
  );
};
