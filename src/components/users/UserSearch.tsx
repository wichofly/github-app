import { Dispatch, useState } from 'react';
import { Action, ACTION_TYPES } from '../../reducer/GithubReducer';
import { searchUsers } from '../../action/GithubActions';
import { User } from '../../interfaces/interface';

interface Props {
  setAlert: (message: string, type: string) => void;
  users: User[];
  dispatch: Dispatch<Action>;
}

const UserSearch = ({ setAlert, users, dispatch }: Props) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something to search.', 'error');
    } else {
      // Proceed with the search logic
      dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });

      const users = await searchUsers(text);
      dispatch({ type: ACTION_TYPES.SET_USERS, payload: users });

      setText('');
      console.log('Hi ' + text);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: ACTION_TYPES.SET_CLEAR })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
