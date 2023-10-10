import React from "react";
import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Services from "../../../../Services";
/**
 * @param {object} props
 * @param {Array.<number>} likesFrom
 * @returns
 */
const Like = (props) => {
  const { _id } = useSelector((state) => state.auth);
  const { likesFrom, postId } = props;
  const navigate = useNavigate();
  const hasUserLiked =
    Array.isArray(likesFrom) && likesFrom.findIndex((userId) => userId === _id) > -1;
  console.log({ likesFrom, postId, _id });
  const handleClickOnLike = async () => {
    const res = await Services.likePost(postId)
    if (res) {
      navigate(0)
    }
  }
  return (
    <Container>
      {hasUserLiked ? (
        <FavoriteIcon color="#D22B2B" size={30} />
      ) : (
        <FavoriteBorderIcon
          onClick={handleClickOnLike}
          color="#D22B2B"
          size={30}
        />
      )}
      <LikesCount hasUserLiked={hasUserLiked}>{likesFrom?.length}</LikesCount>
    </Container>
  );
};

export default Like;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const LikesCount = styled.div`
  font-size: 22px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: ${(props) => (!!props?.hasUserLiked ? "bold" : "regular")};
`;
