import React from "react";
import styled from "@emotion/styled";
import { BaseURL } from "../../../Services/constants";
import { useNavigate } from "react-router-dom";
import Like from "./Action/Like";
import Reply from "./Action/Reply";
/**
 * @typedef {object} ReplyProps
 * @property {number} userId
 * @property {string} text
 * @property {string} userProfilePic
 * @property {string} username
 * 
 * @typedef {object} FeedCardProps
 * @property {string} _id
 * @property {string} postedBy
 * @property {string} text
 * @property {string} img
 * @property {Array.<number>} likes
 * @property {Array.<ReplyProps>} replies
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {number} __v
 *
 * @param {FeedCardProps} props
 * @returns
 */
const FeedCard = (props) => {
  const imageUrl = BaseURL + props.img;
  const navigate = useNavigate();
  console.log("imageUrl", imageUrl);
  const handleClick = (e) => {
    e.preventDefault();
    const result = navigate("post/" + props._id, { state: props });
    console.log("FeedCard result", result);
  };
  return (
    <Container>
      <Wrapper onClick={handleClick}>
        <Image src={imageUrl} />
        <Text>{props.text}</Text>
      </Wrapper>
      <ActionsContainer>
        <Like likesFrom={props.likes} postId={props._id} />
        <Reply replies={props.replies} />
      </ActionsContainer>
    </Container>
  );
};

export default FeedCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: white;
  border-radius: 8px;
  padding: 8px 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Image = styled.div`
  display: block;
  width: 100%;
  height: auto;
  min-height: 300px;
  position: relative;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.2s ease;

  &:hover {
    background-size: cover;
  }
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-align: justify;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`
