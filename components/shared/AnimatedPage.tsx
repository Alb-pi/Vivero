// src/components/shared/AnimatedPage.tsx


import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedPageProps {
  children: React.ReactNode;
}

const animations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      className="w-full border border-pink-500"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;