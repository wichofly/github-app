import { Link } from 'react-router-dom';
import { User } from '../../reducer/GithubReducer';

interface Prop {
  user: User;
}
const UserItem = ({ user: { login, avatar_url } }: Prop) => {
  return (
    <Link className="text-base-content text-opacity-60" to={`/user/${login}`}>
      <div className="card shadow-md compact side bg-base-300">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full shadow w-14 h-14">
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="card-title">{login}</h2>
            Visit Profile
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
