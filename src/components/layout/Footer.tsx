const Footer = () => {
  const footerYears = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 footer-center">
      <p>Copyrights &copy; {footerYears} All Rights Reserved by Techinfo</p>
    </footer>
  );
};

export default Footer;
