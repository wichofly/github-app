import React, { useEffect } from 'react';
import { getGithubUrl, getGithubToken } from '../../service/config';

const UserResults: React.FC = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const githubUrl = getGithubUrl();
    const githubToken = getGithubToken();

    const response = await fetch(`${githubUrl}`, {
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
