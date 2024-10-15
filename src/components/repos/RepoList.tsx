import { Repo } from '../../reducer/GithubReducer';
import RepoItem from './RepoItem';

interface Props {
  repos: Repo[];
}

const RepoList = ({ repos }: Props) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-200">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepoList;
