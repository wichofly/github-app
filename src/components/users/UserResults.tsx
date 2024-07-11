import UserItem from './UserItem';
import { User } from '../../reducer/GithubReducer';

interface Props {
  users: User[];
  loading: boolean;
}

const UserResults = ({ users, loading }: Props) => {
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
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
