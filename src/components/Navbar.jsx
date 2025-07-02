
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import path from 'path';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Αρχική' },
    { path: '/playlists', label: 'Playlists' },
    { path: '/book', label: 'Βιβλίο' },
    { path: '/products', label: 'Προϊόντα'},
    { path: '/about', label: 'Σχετικά' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 dark:bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Code className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">CodeGRow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary active-nav-link' : 'text-foreground/80 dark:text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://www.youtube.com/@CodeGRrow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span className="text-sm font-medium">YouTube</span>
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background dark:bg-background shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted dark:hover:bg-muted'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://www.youtube.com/@CodeGRrow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 py-2 px-4 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              onClick={closeMenu}
            >
              <Youtube className="h-5 w-5" />
              <span>YouTube</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
