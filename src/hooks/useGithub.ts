import { useState, useEffect } from 'react';
import { getGithubUrl, getGithubToken } from '../service/config';

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

const useGithub = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

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
    setUsers(data);
    setLoading(false);
  };

  return { users, loading };
};

export default useGithub;
