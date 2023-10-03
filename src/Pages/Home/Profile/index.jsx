import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Profile = () => {
  const { feed } = useLoaderData();
  console.log('feed', feed)
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <Container>
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
                return feed.map((post) => (
                  <div>
                    <p>{post.text}</p>
                    <p>{post.img}</p>
                  </div>
                ));
              }
            }}
          />
        </Suspense>
      </Container>
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
