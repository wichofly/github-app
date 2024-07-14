import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGithub from '../hooks/useGithub';

const User = () => {
  const { getUser, user } = useGithub();

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{user.login}</div>;
};

export default User;
