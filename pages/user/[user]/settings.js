import { useRouter } from 'next/router';
import React from 'react';

const Settings = () => {
  const router = useRouter();
  const { query } = router;
  return <div>This is a settings page of {query.user}...</div>;
};

export default Settings;
