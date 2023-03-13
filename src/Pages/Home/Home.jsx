import React, {useState, useEffect} from 'react'
import './styles.css'
import Hero from "../../components/Hero/Hero";
import News from '../../components/News/News';
import MVideos from '../../components/MVideos/MVideos';
import Footer from '../../components/Footer/Footer';

import HomeNav from '../../components/HomeNav/HomeNav';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Home = () => {
  const [childData, setChildData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
  };
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 400,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

    {childData === "component1" &&        <div data-aos="fade">
      <Hero />
    </div>}
    {childData === "component2" &&         <div data-aos="fade">
      <MVideos />
    </div>}
    {childData === "component3" &&         <div data-aos="fade">
      <News />
    </div>}
    <HomeNav onChildData={handleChildData}/>
    <Footer/>
 
    
  
  </div>
  )
}
