import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import useGithub from '../hooks/useGithub';

const Home = () => {
  const { users, loading, searchUsers } = useGithub();

  return (
    <>
      <UserSearch searchUsers={searchUsers} users={users} />
      <UserResults users={users} loading={loading} />
    </>
  );
};

export default Home;
