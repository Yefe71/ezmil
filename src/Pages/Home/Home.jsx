import React, {useState} from 'react'
import SwiperComp from "../../components/SwiperComp/SwiperComp";
import SideAlters from "../../components/SideAlters/SideAlters";
import './styles.css'
import {motion} from 'framer-motion'
import Hero from "../../components/Hero/Hero";
import News from '../../components/News/News';
import MVideos from '../../components/MVideos/MVideos';
import Footer from '../../components/Footer/Footer';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import HomeNav from '../../components/HomeNav/HomeNav';

export const Home = () => {
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    {childData === "component1" && <Hero/>}
    {childData === "component2" && <MVideos/> }
    {childData === "component3" && <News/>}
    <HomeNav onChildData={handleChildData}/>
    <Footer/>
    <ContentContainer/>
    
  
  </motion.div>
  )
}
