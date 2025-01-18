import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';
import { Repo } from '../../interfaces/interface';

interface Props {
  repo: Repo;
}

const RepoItem = ({
  repo: {
    html_url,
    name,
    description,
    watchers_count,
    stargazers_count,
    open_issues,
    forks,
  },
}: Props) => {
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink /> {name}
          </a>
        </h3>
        <p>{description}</p>

        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
