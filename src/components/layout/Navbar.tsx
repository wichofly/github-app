import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Prop {
  title: string;
}

const Navbar = ({ title }: Prop) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral-800 text-white">
      <div className="container mx-auto p-2">
        <div className="flex-none">
          <Link to="/" className="text-xl font-bold flex align-middle">
            <FaGithub className="inline pr-2 text-3xl" />
            {title}
          </Link>
        </div>

        <div className="flex-1">
          <div className="flex justify-end ">
            <Link to="/" className="btn btn-ghost btn-sm text-xl">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm text-xl">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
