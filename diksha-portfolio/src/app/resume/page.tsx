"use client";

import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 left-1/4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
            animate={{ scale: [1, 1.3, 1], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -top-10 right-1/4 w-24 h-24 rounded-full bg-purple-400/20 blur-xl"
            animate={{ scale: [1, 1.4, 1], y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
          
          <motion.h1 
            className="section-title text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Resume
          </motion.h1>
          <div className="section-subtitle mx-auto"></div>
          <motion.p 
            className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Download my complete resume in PDF format.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-400/5 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          />
          
          <motion.div 
            className="card p-12 text-center card-hover relative z-10 glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ y: -15, scale: 1.02 }}
          >
            <motion.div 
              className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 pulse-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.15, rotate: 15 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold text-on-light-bg mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Diksha Anand
            </motion.h2>
            <motion.p 
              className="text-xl text-primary mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Senior Manager — Insights Mining & Digital Analytics
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-12 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Download my complete resume to learn more about my professional experience, skills, and achievements in digital analytics and insights mining.
            </motion.p>
            <motion.a 
              href="/assets/Diksha_Anand_COE_Lead_IM_Resume.pdf" 
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4 font-bold"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(176, 101, 155, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume (PDF)
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;