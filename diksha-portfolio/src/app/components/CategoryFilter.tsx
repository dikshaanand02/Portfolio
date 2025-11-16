import { motion } from 'framer-motion';
import React from 'react';

interface CategoryFilterProps {
  category: string;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  category, 
  activeCategory, 
  setActiveCategory 
}) => {
  return (
    <motion.button
      onClick={() => setActiveCategory(category)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md ${
        activeCategory === category
          ? 'bg-gradient-to-r from-primary to-purple-700 text-white shadow-lg'
          : 'bg-white text-primary border border-primary hover:bg-primary/10'
      }`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {category}
    </motion.button>
  );
};

export default CategoryFilter;