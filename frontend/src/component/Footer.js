import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0f172ad0]">
      <div className="container mx-auto p-2">
        <p className="text-center text-white bold">Vintech &copy; {currentYear} </p>
      </div>
    </footer>
  );
};

export default Footer;
