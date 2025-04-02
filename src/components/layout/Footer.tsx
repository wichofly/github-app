import { FaGithub, FaGithubAlt, FaLaptop, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerYears = new Date().getFullYear();

  return (
    <footer className="bg-neutral-700 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:space-x-4">
          <FaGithubAlt className="text-4xl sm:text-5xl md:text-5xl text-white" />
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white">
            Copyrights &copy; {footerYears} All Rights Reserved by Techinfo
          </p>
        </div>

        <div className="flex flex-col items-center text-white">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            Find me on
          </p>
          <div className="flex space-x-6 sm:space-x-8">
            <a
              href="https://www.linkedin.com/in/mauricio-erazo-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://github.com/wichofly/github-app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a
              href="https://mauricioerazo-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition duration-300"
              aria-label="Portfolio"
            >
              <FaLaptop className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
