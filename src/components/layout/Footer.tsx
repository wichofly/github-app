import { FaGithubAlt } from 'react-icons/fa';

const Footer = () => {
  const footerYears = new Date().getFullYear();

  return (
    <footer className="footer p-5 bg-gray-700 footer-center">
      <FaGithubAlt className="text-5xl text-white" />
      <p className="text-white text-xl">
        Copyrights &copy; {footerYears} All Rights Reserved by Techinfo
      </p>
    </footer>
  );
};

export default Footer;
