import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../asserts/icon.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Team", path: "/team" },
];

export default function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-purple-600 font-semibold"
      : "text-gray-700 hover:text-purple-600 transition-colors duration-200";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img src={icon} alt="Logo" className="h-8" />
          <span className="text-xl font-bold text-gray-800">
            CodrCrest-Tech
          </span>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={navLinkClass}
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
          <button className="ml-4 px-5 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition-all">
            Get Started
          </button>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav - Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col items-start px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              ))}
              <button className="mt-2 px-5 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all w-full text-center">
                Get Started
              </button>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
