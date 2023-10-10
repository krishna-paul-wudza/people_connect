import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import FeedCard from "../feed/FeedCard";

const Profile = () => {
  const { feed } = useLoaderData();
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <Suspense
        fallback={
          <Container>
            <Spinner />
          </Container>
        }
      >
        <Await
          resolve={feed}
          errorElement={<div>Error Occured</div>}
          children={(feed) => {
            if (feed.length === 0) {
              return <div>No posts done by you.</div>;
            } else {
              return feed.map((post) => <FeedCard key={post._id} {...post} />);
            }
          }}
        />
      </Suspense>
    </>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: whitesmoke;
  border-radius: 8px;
  padding: 16px 32px;
`;
