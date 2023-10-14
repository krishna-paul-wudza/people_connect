import styled from "@emotion/styled";
import React, { useState } from "react";
import {
  EditButton,
  ProfilePic,
  Container,
  Title,
  TitleContainer,
} from "./common";
import { useSelector } from "react-redux";
import PersonalInfoEdit from "./PersonalInfoEdit";
import PersonalInfoView from "./PersonalInfoView";
import ProfilePictureSection from "./ProfilePictureSection";

const ProfileView = () => {
  const { name, username, profilePic, email, bio, _id } = useSelector(
    (state) => state.auth
  );
  const [isEditing, setIsEditing] = useState(false);
  const handleEditButton = () => {
    console.log("_id", _id)
    setIsEditing((state) => !state);
  };
  return (
    <Wrapper>
      <ProfilePictureSection profilePic={profilePic} id={_id} />
      <Container>
        <TitleContainer>
          <Title>Personal Information</Title>
          <EditButton onClick={handleEditButton}>
            {isEditing ? "Cancel" : "Edit"}
          </EditButton>
        </TitleContainer>
        {isEditing ? (
          <PersonalInfoEdit
            name={name}
            username={username}
            email={email}
            bio={bio}
            id={_id}
          />
        ) : (
          <PersonalInfoView
            name={name}
            username={username}
            email={email}
            bio={bio}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default ProfileView;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  background-color: whitesmoke;
`;
