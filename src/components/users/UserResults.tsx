import { useEffect, useState } from 'react';
import { getGithubUrl, getGithubToken } from '../../service/config';

interface User {
  id: number;
  login: string;
}

const UserResults = () => {
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

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user: User) => (
          <h3 key={user.id}>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>;
      </div>
    );
  }
};

export default UserResults;
