import { useRouter } from 'next/router';
import React from 'react';

const UserIndex = () => {
  const router = useRouter();
  const { query } = router;
  return <div>This is user: {query.user}</div>;
};

export default UserIndex;
