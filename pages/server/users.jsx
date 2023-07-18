import React from 'react';

// Props will contain data returned by server
const UserPage = (props) => {
  const { users } = props.data;
  return (
    <>
      <div>This is a server side render page!</div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
};

// Server side rendering
export const getServerSideProps = async () => {
  const data = await (await fetch('https://dummyjson.com/users')).json();

  return {
    props: {
      data: data,
    },
  };
};

export default UserPage;
