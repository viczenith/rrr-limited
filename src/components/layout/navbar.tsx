import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Force-hide Navbar entirely on the invoice generator route
  // This is a hard guard to ensure the navbar never renders on that page in production (e.g., GitHub Pages)
  const normalizedPath = location.pathname.replace(/\/+$/, "");

  const navItems = [
    { path: '/', label: 'Home', description: 'Welcome home' },
    { 
      path: '/properties', 
      label: 'Properties', 
      description: 'Luxury estates',
      hasDropdown: true,
      dropdownItems: [
        { 
          path: '/estates/rehoboth-city', 
          label: 'Rehoboth City', 
          description: 'Lifecamp',
          icon: '🏘️'
        },
        { 
          path: '/estates/lifecamp', 
          label: 'Polo City', 
          description: 'Usama hills, Katampe Extention',
          icon: '🏙️'
        },
      ]
    },
    { path: '/about', label: 'About', description: 'Our story' },
    // { path: '/services', label: 'Services', description: 'What we offer' },
    { path: '/contact', label: 'Contact', description: 'Get in touch' }
  ];

  // Advanced scroll detection with motion values
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Update active index based on current route
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [location.pathname, navItems]);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0
    },
    open: {
      opacity: 1,
      height: "auto"
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  if (normalizedPath === '/invoice-generator' || normalizedPath.endsWith('/invoice-generator')) {
    return null;
  }

  return (
    <>
      {/* Floating particles background */}
      <div className="navbar-particles">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * 100,
            }}
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Navigation */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.04, 0.62, 0.23, 0.98],
          staggerChildren: 0.1
        }}
      >
        {/* Animated border gradient */}
        <motion.div 
          className="navbar-border"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <motion.div 
              className="logo"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/">
                <motion.div 
                  className="logo-content"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {/* Logo glow effect */}
                  <motion.div
                    className="logo-glow"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.img 
                    src={`${import.meta.env.BASE_URL}rrr-logo.png`} 
                    alt="Righteous & Rich Realty Logo"
                    className="logo-image"
                    onError={(e) => {
                      e.currentTarget.src = `${import.meta.env.BASE_URL}logo.png`;
                    }}
                    whileHover={{ rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Subtle sparkle effect */}
                  <motion.div
                    className="logo-sparkle"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={16} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path || 
                  (item.hasDropdown && item.dropdownItems?.some(dropItem => location.pathname === dropItem.path));
                
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    className="relative dropdown-container"
                    onMouseEnter={() => {
                      setActiveIndex(index);
                      if (item.hasDropdown) {
                        setDropdownOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        setDropdownOpen(false);
                      }
                    }}
                  >
                    {item.hasDropdown ? (
                      // Properties with dropdown
                      <div className="relative">
                        <motion.div
                          className={`nav-link-wrapper ${isActive ? 'active' : ''}`}
                          whileHover={{ y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          <span className="nav-link-text flex items-center gap-2">
                            {item.label}
                            <motion.div
                              animate={{ rotate: dropdownOpen ? 180 : 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <ChevronDown size={14} />
                            </motion.div>
                          </span>
                          
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="active-indicator"
                              layoutId="activeIndicator"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}

                          {/* Hover background */}
                          <motion.div
                            className="hover-background"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.div>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="dropdown-menu"
                            >
                              <div className="dropdown-content">
                                {item.dropdownItems?.map((dropItem, dropIndex) => (
                                  <motion.div
                                    key={dropItem.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: dropIndex * 0.1 }}
                                  >
                                    <Link 
                                      to={dropItem.path}
                                      className="dropdown-item"
                                    >
                                      <motion.div
                                        className="dropdown-item-content"
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <span className="dropdown-icon">{dropItem.icon}</span>
                                        <div className="dropdown-text">
                                          <span className="dropdown-label">{dropItem.label}</span>
                                          <span className="dropdown-description">{dropItem.description}</span>
                                        </div>
                                      </motion.div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Regular navigation items
                      <Link to={item.path}>
                        <motion.div
                          className={`nav-link-wrapper ${isActive ? 'active' : ''}`}
                          whileHover={{ y: -2 }}
                          whileTap={{ y: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          <span className="nav-link-text">{item.label}</span>
                          
                          {/* Hover tooltip */}
                          <motion.div
                            className="nav-tooltip"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.description}
                          </motion.div>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="active-indicator"
                              layoutId="activeIndicator"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                          )}

                          {/* Hover background */}
                          <motion.div
                            className="hover-background"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.div>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              className="nav-cta"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link to="/affiliate-registration">
                <motion.div
                  className="cta-button"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {/* Button shimmer effect */}
                  <motion.div
                    className="button-shimmer"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "linear"
                    }}
                  />
                  
                  <span className="cta-text">Earn With Us</span>
                  
                  <motion.div
                    className="cta-arrow"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button 
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="mobile-nav"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.hasDropdown ? (
                      // Properties with mobile dropdown
                      <div className="mobile-dropdown-container">
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className={`mobile-nav-link ${location.pathname === item.path || 
                            (item.dropdownItems?.some(dropItem => location.pathname === dropItem.path)) 
                            ? 'active' : ''}`}
                        >
                          <span className="flex items-center justify-between w-full">
                            {item.label}
                            <motion.div
                              animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="mobile-dropdown-menu"
                            >
                              {item.dropdownItems?.map((dropItem, dropIndex) => (
                                <motion.div
                                  key={dropItem.path}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: dropIndex * 0.1 }}
                                >
                                  <Link 
                                    to={dropItem.path}
                                    className="mobile-dropdown-item"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="mobile-dropdown-icon">{dropItem.icon}</span>
                                    <div className="mobile-dropdown-text">
                                      <span className="mobile-dropdown-label">{dropItem.label}</span>
                                      <span className="mobile-dropdown-description">{dropItem.description}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Regular mobile navigation items
                      <Link 
                        to={item.path}
                        className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mobile-cta"
                >
                  <Link to="/affiliate-registration" className="mobile-cta-button">
                    <span className="cta-text">Earn With Us</span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

