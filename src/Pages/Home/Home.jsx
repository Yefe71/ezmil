import React from 'react'
import SwiperComp from "../../components/SwiperComp/SwiperComp";
import SideAlters from "../../components/SideAlters/SideAlters";
import './styles.css'
import {motion} from 'framer-motion'
import Hero from "../../components/Hero/Hero";
import News from '../../components/News/News';
import Footer from '../../components/Footer/Footer';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
export const Home = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <Hero/>   
    <ContentContainer/>
    
  
  </motion.div>
  )
}
