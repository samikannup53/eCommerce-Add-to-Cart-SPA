
const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="text-center py-4 bg-[#172337] text-white">
        <p>&copy; {currentYear} ShoppyCart. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  