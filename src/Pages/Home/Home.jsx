import React from 'react'
import SwiperComp from "../../components/SwiperComp/SwiperComp";
import SideAlters from "../../components/SideAlters/SideAlters";
import './styles.css'
import {motion} from 'framer-motion'
import Hero from "../../components/Hero/Hero";

export const Home = () => {
  return (
  <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity:0}}>
    <Hero/>
    {/* <SideAlters /> */}
    {/* <SwiperComp /> */}
  </motion.div>
  )
}
