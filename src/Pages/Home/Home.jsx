import React, {useState} from 'react'
import './styles.css'
import Hero from "../../components/Hero/Hero";
import News from '../../components/News/News';
import MVideos from '../../components/MVideos/MVideos';
import Footer from '../../components/Footer/Footer';

import HomeNav from '../../components/HomeNav/HomeNav';

export const Home = () => {
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
  };
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    {childData === "component1" && <Hero/>}
    {childData === "component2" && <MVideos/> }
    {childData === "component3" && <News/>}
    <HomeNav onChildData={handleChildData}/>
    <Footer/>
 
    
  
  </div>
  )
}
