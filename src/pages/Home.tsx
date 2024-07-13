import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import useGithub from '../hooks/useGithub';

const Home = () => {
  const { users, loading, searchUsers, clearUsers } = useGithub();

  return (
    <>
      <UserSearch searchUsers={searchUsers} users={users} clearUsers={clearUsers}/>
      <UserResults users={users} loading={loading} />
    </>
  );
};

export default Home;
