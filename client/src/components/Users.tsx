import React from 'react';
import styled from 'styled-components';
import { useUsersQuery } from '../generated/graphql';

const Users = () => {
  const { data } = useUsersQuery();
  if (!data || !data.Users) return null;
  return (
    <section>
      <Title>Users</Title>
      <Container>
        {data.Users.map(user => (
          <Card>
            <img src={user.avatar} alt={`${user.fullName} avatar`} />
            <p>{user.fullName}</p>
          </Card>
        ))}
      </Container>
    </section>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 60px auto;
  display: flex;
`;

const Title = styled.h1`
  text-align: center;
`;

const Card = styled.div`
  flex-basis: calc(33.33% - 32px);
  padding: 16px;
  text-align: center;
  img{
    width: 100%;
    border-radius: 100%;
  }
`;

export default Users;