
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/#contact" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full py-4 px-6 md:px-10 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            AT
          </motion.div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Arpit Tripathi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => {
            const isActive = 
              (link.path === "/" && location.pathname === "/") ||
              (link.path !== "/" && link.path.startsWith("/#") && location.pathname === "/" && window.location.hash === link.path.substring(1)) ||
              (link.path === location.pathname);
              
            return (
              <motion.li key={link.name} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative ${
                    isActive ? "text-purple-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                      layoutId="navbar-indicator"
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
          <motion.li whileHover={{ scale: 1.05 }}>
            <a
              href="/#contact"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white bg-slate-800 p-2 rounded-md"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[72px] bg-slate-900/95 backdrop-blur-lg md:hidden z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul className="flex flex-col items-center py-10 space-y-8">
              {navLinks.map((link) => {
                const isActive = 
                  (link.path === "/" && location.pathname === "/") ||
                  (link.path !== "/" && link.path.startsWith("/#") && location.pathname === "/" && window.location.hash === link.path.substring(1)) ||
                  (link.path === location.pathname);
                  
                return (
                  <motion.li 
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-lg font-medium ${
                        isActive ? "text-purple-400" : "text-slate-300"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/#contact"
                  className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  onClick={toggleMobileMenu}
                >
                  Let's Connect
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
