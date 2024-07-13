import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import useGithub from '../hooks/useGithub';
import useAlert from '../hooks/useAlert';
import Alert from '../components/layout/Alert';

const Home = () => {
  const { users, loading, searchUsers, clearUsers } = useGithub();
  const { setAlert, alert } = useAlert();

  return (
    <>
      <Alert alert={alert} />
      <UserSearch
        searchUsers={searchUsers}
        users={users}
        clearUsers={clearUsers}
        setAlert={setAlert}
      />
      <UserResults users={users} loading={loading} />
    </>
  );
};

export default Home;
