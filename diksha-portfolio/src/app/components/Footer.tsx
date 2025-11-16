"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-400/5 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative element */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-2xl font-bold mb-4 relative z-10 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Diksha Anand
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-4 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Insight Mining & Digital Analytics Leader
            </motion.p>
            <motion.p 
              className="text-gray-400 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Driving data-backed digital marketing decisions with GA4, GTM, Looker Studio & Salesforce.
            </motion.p>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative element */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-purple-400/10 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />
            
            <motion.h4 
              className="text-lg font-semibold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Contact Info
            </motion.h4>
            <ul className="space-y-3 relative z-10">
              <motion.li 
                className="flex items-start group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiMapPin className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-gray-400 group-hover:text-primary transition-colors">Hyderabad, India</span>
              </motion.li>
              <motion.li 
                className="flex items-start group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiMail className="w-4 h-4 text-primary" />
                </motion.div>
                <a href="mailto:diksha.g.anand@guseducationindia.com" className="text-gray-400 hover:text-primary transition-colors group-hover:text-primary">
                  diksha.g.anand@guseducationindia.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative element */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/10 blur-xl"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            />
            
            <motion.h4 
              className="text-lg font-semibold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Connect
            </motion.h4>
            <motion.div 
              className="flex space-x-4 relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/diksha-anand-digital-analytics/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <FiLinkedin className="w-7 h-7" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Decorative element */}
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/10 blur-lg"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-4 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
              whileHover={{ y: -3 }}
            >
              <Link href="/resume" className="hover:text-primary transition-colors font-medium">
                Resume
              </Link>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1.1 }}
            className="relative z-10"
          >
            &copy; {new Date().getFullYear()} Diksha Anand. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;