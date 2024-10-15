import { FaGithub, FaGithubAlt, FaLaptop, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerYears = new Date().getFullYear();

  return (
    <footer className="bg-neutral-700 py-3">
      <div className="container mx-auto p-2 text-white flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FaGithubAlt className="text-5xl " />
          <p className=" text-2xl font-light">
            Copyrights &copy; {footerYears} All Rights Reserved by Techinfo
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className=" text-2xl font-semibold mb-4">Find me on</p>
          <div className="flex space-x-8">
            <a
              href="https://www.linkedin.com/in/mauricio-erazo-/"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>

            <a
              href="https://github.com/wichofly/tipCalculator-app"
              target="_blank"
              rel="noopener"
              className="hover:text-gray-500 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-8 h-8" />
            </a>

            <a
              href="https://wichofly.github.io/portfolio-website/"
              target="_blank"
              rel="noopener"
              className="hover:text-slate-400 transition duration-300"
              aria-label="Portfolio"
            >
              <FaLaptop className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
