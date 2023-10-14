import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../Redux/AllSlice/UsersSlice";
import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BaseURL } from "../../../Services/constants";

/**
 * @typedef {Object} UserFeedCardHeaderProps
 * @property {string} id
 * @property {string} userId
 *
 * @param {UserFeedCardHeaderProps} props
 * @returns
 */
const UserFeedCardHeader = (props) => {
  const { id, userId } = props;
  const user = useSelector((state) => state.users?.[id]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) dispatch(loadUser(id));
  }, [user]);
  if (!user) {
    return (
      <RowContainer>
        <Skeleton variant="circular" height={50} width={50} />
        <ColumnContainer>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </ColumnContainer>
        <Skeleton variant="text" />
      </RowContainer>
    );
  } else {
    const profilePic =
      !!user.profilePic && String(user.profilePic).startsWith("/uploads")
        ? BaseURL + user.profilePic
              : "/assets/user.png";
      console.log(profilePic)
    const followed = Array.isArray(user.followers)
      ? user.followers.includes(userId)
      : false;
    return (
      <RowContainer>
        <ProfileImage src={profilePic} />
        <ColumnContainer>
          <NameLabel>{user.name}</NameLabel>
          <UsernameLabel>@{user.username}</UsernameLabel>
        </ColumnContainer>
        <FollowButton>
          <BookmarkIcon size={20} />
          {followed ? "Following" : "Follow"}
        </FollowButton>
      </RowContainer>
    );
  }
};

export default UserFeedCardHeader;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;
  padding: 8px;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  flex: 1;
`;
const CommonLabel = styled.div`
  font-size: 18px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: left;
`;
const NameLabel = styled(CommonLabel)`
  color: #3c3c3c;
  font-size: 16px;
  font-weight: bold;
`;
const UsernameLabel = styled(CommonLabel)`
  color: #cccccc;
  font-weight: regular;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
const FollowButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 4px 8px;
`;
