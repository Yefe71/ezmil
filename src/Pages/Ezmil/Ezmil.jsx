import React from 'react';
import ezmilcss from './ezmil.module.css';
import SideAlters from '../../components/SideAlters/SideAlters';
import biopic from '../../container/img/thumbs/biopic.jpg';
import { motion } from 'framer-motion';

export const Ezmil = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <div className={ezmilcss.ezmilWrapper}> 
        <div className={ezmilcss.hero} style={{ backgroundImage: `url(${biopic})` }}></div>
      </div>
  </motion.div>
  );
};
