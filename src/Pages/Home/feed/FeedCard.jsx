import React from "react";
import styled from "@emotion/styled";
import { BaseURL } from "../../../Services/constants";
/**
 * @typedef {object} FeedCardProps
 * @property {string} _id
 * @property {string} postedBy
 * @property {string} text
 * @property {string} img
 * @property {} likes
 * @property {} replies
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {number} __v
 *
 * @param {FeedCardProps} props
 * @returns
 */
const FeedCard = (props) => {
  const imageUrl = BaseURL + props.img
  console.log("imageUrl", imageUrl)
  return (
    <Container>
      <Image src={imageUrl} />
      <Text>{props.text}</Text>
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
