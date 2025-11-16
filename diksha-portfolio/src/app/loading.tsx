"use client";

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"
        />
        <motion.h2 
          className="text-2xl font-bold text-on-light-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.h2>
      </div>
    </div>
  );
}