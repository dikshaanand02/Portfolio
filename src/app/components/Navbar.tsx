"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const observer = useRef<IntersectionObserver | null>(null);

  const menuItems = useMemo(() => [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "journey", label: "Journey", href: "#journey" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "expertise", label: "Expertise", href: "#expertise" },
    { id: "contact", label: "Contact", href: "#contact" }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up intersection observer to track active section
  useEffect(() => {
    // Create observer if it doesn't exist
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          // Find the section that is most visible in the viewport
          let mostVisibleEntry = null;
          let highestRatio = 0;
          
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
              highestRatio = entry.intersectionRatio;
              mostVisibleEntry = entry;
            }
          });
          
          // If we found a visible section, set it as active
          if (mostVisibleEntry) {
            setActiveSection(mostVisibleEntry.target.id);
          }
        },
        { 
          root: null, 
          rootMargin: '0px 0px -20% 0px', // Trigger when section is 80% from top
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] 
        }
      );
    }

    // Observe all sections
    menuItems.forEach((item) => {
      const sectionId = item.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        observer.current!.observe(element);
      }
    });

    // Cleanup observer on unmount
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [menuItems]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Menu Icon Only */}
      <motion.div 
        className="md:hidden fixed top-4 right-4 z-[100]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <FiX className="text-3xl text-primary cursor-pointer" onClick={() => setIsOpen(false)} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: -90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiMenu className="text-3xl text-primary cursor-pointer" onClick={() => setIsOpen(true)} />
          </motion.div>
        )}
      </motion.div>

      {/* Desktop Navbar */}
      <motion.nav 
        className={`
          hidden md:block
          fixed top-0 left-0 right-0 z-[100]
          px-4 md:px-[7vw] lg:px-[10vw]
          transition-all duration-300 ease-in-out
          ${isScrolled
            ? "py-2"
            : "py-4"}
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div 
          className={`rounded-full px-6 py-4 md:px-8 ${isScrolled ? '' : ''} w-full bg-white/90 backdrop-blur-md shadow-lg`}
        >
          <div className="flex justify-between items-center w-full">
            <div className="w-8 h-8" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-gray-700 flex-grow justify-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  className={`
                    relative cursor-pointer transition-all duration-500
                    group whitespace-nowrap
                    ${activeSection === item.id
                      ? "text-primary text-glow font-bold scale-110" 
                      : "hover:text-primary"}
                  `}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}>
                    {item.label}
                  </Link>
                  <motion.span 
                    className={`
                      absolute bottom-[-4px] left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full
                      transition-all duration-500 ease-out
                    `}
                    animate={{ 
                      width: activeSection === item.id ? "100%" : "0%" 
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ width: "100%" }}
                  />
                  {/* Glow effect for active item */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      layoutId="navGlow"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex space-x-4 text-gray-700 ml-auto">
              <motion.a 
                href="https://www.linkedin.com/in/diksha-anand-digital-analytics/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                href="mailto:diksha.g.anand@guseducationindia.com" 
                className="hover:text-primary transition-transform duration-300 hover:scale-110"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-[99] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end p-4">
            <FiX className="text-3xl text-primary cursor-pointer transition-transform duration-200 hover:rotate-90" onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex flex-col items-center justify-center flex-grow relative">
            {/* Decorative floating elements */}
            <motion.div 
              className="absolute top-10 left-10 w-24 h-24 rounded-full bg-primary/10 blur-xl"
              animate={{ 
                x: [0, 20, 0], 
                y: [0, -20, 0], 
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-purple-400/10 blur-xl"
              animate={{ 
                x: [0, -20, 0], 
                y: [0, 20, 0], 
                scale: [1, 1.3, 1] 
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            />
            
            <ul className="flex flex-col items-center space-y-6 py-4 text-gray-700 relative z-10">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.id} 
                  className={`
                    cursor-pointer transition-all duration-500 px-8 py-4 rounded-xl text-center text-2xl font-medium
                    ${activeSection === item.id 
                      ? "text-primary text-glow font-bold bg-white/20 backdrop-blur-sm shadow-lg" 
                      : "hover:text-primary bg-white/10 backdrop-blur-sm"}
                  `}
                  initial={{ opacity: 0, x: -50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }} className="w-full">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className="border-t border-gray-200 pt-6 flex justify-center space-x-8 text-gray-700 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/diksha-anand-digital-analytics/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/20">
                  <FaLinkedin size={32} />
                </div>
              </motion.a>
              <motion.a 
                href="mailto:diksha.g.anand@guseducationindia.com" 
                className="hover:text-primary transition-transform duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/20">
                  <FiMail size={32} />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Extra Styles */}
      <style>{`
        @keyframes navFadeIn {
          0% { opacity: 0; transform: translateY(-100%); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-nav-fade-in {
          animation: navFadeIn 0.7s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
        .aura-glow {
          text-shadow:
            0 0 6px rgba(176, 101, 155, 0.7),
            0 0 12px rgba(176, 101, 155, 0.4),
            0 0 20px rgba(142, 111, 216, 0.3);
        }
      `}</style>
    </>
  );
};

export default Navbar;