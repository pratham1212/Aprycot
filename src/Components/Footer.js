import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-orange-500 py-4 px-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-sm text-Orange-400">
          © 2021 Made by <span className="text-orange-600">Pratham Shah</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
