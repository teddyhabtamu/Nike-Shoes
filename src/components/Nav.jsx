import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import closeIcon from "../assets/icons/close.svg"; // Import the close icon
import { navLinks } from "../constants";

const Nav = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="padding-x py-8 fixed z-50 w-full bg-white">
      {" "}
      {/* Fixed positioning and higher z-index */}
      <nav className="relative flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="hidden max-lg:block">
          <img
            src={isMobileMenuOpen ? closeIcon : hamburger} // Toggle between hamburger and close icon
            alt="Menu"
            width={25}
            height={25}
            onClick={toggleMobileMenu}
            className="cursor-pointer"
          />
        </div>

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-50 bg-white shadow-lg flex flex-col items-center gap-6 py-8 lg:hidden">
          
            <img
              src={closeIcon}
              alt="Close"
              width={25}
              height={25}
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 cursor-pointer"
            />
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-montserrat text-lg text-slate-gray"
                onClick={toggleMobileMenu} // Close menu when link is clicked
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
