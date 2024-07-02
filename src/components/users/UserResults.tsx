import React, { useEffect } from 'react';

const UserResults: React.FC = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const githubUrl: string = 'https://api.github.com';
    const githubToken: string = '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';

    const response = await fetch(`${githubUrl}/users`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return <div>UserResults</div>;
};

export default UserResults;
