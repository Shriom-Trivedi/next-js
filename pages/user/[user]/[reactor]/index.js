import { useRouter } from 'next/router';
import React from 'react';

const Reactor = () => {
  const router = useRouter();
  const { query } = router;
  return <div>Reactor: {query.reactor}</div>;
};

export default Reactor;
