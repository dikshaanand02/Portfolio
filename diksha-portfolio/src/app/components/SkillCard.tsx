import { motion } from 'framer-motion';
import React from 'react';

interface Skill {
  name: string;
  category: string;
  level: number;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      className="card p-6 card-hover glow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -12, scale: 1.03 }}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.h3 
          className="font-bold text-primary text-lg"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {skill.name}
        </motion.h3>
        <motion.span 
          className="text-primary font-bold text-lg"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <motion.p 
        className="text-sm text-gray-900 mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {skill.description}
      </motion.p>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-purple-700 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;