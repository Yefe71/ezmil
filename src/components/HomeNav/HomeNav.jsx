import React, {useState, useEffect} from 'react'
import homecss from './HomeNav.module.css'
import bgnav from '../../container/img/bgdark2.jpg'
const HomeNav = ({ onChildData }) => {
  const [activeComponent, setActiveComponent] = useState('component1')
  const [activeLink, setActiveLink] = useState('link1')


  const handleLinkClick = (component, link) =>{
    setActiveComponent(component);
    setActiveLink(link);
  }

  useEffect(() => {
    onChildData(activeComponent);
  }, [activeComponent])
  

  return (
    <div className = {homecss.homeNavParent} style={{ backgroundImage: `url(${bgnav})` }}>
        <div className={homecss.navWrapper}>

          <h3 className={`${homecss.newStuff} ${homecss.navLink} ${activeLink === 'link1' ? homecss.active:''}`} onClick = {() => handleLinkClick('component1','link1')}>NEW STUFF</h3>
          <h3 className={`${homecss.musicVideos} ${homecss.navLink} ${activeLink === 'link2' ? homecss.active:''}`} onClick = {() => handleLinkClick('component2','link2')}>MUSIC VIDEOS</h3>
          <h3 className={`${homecss.news} ${homecss.navLink} ${activeLink === 'link3' ? homecss.active:''}`} onClick = {() => handleLinkClick('component3','link3')}>NEWS</h3>

        </div>
    </div>
  )
}

export default HomeNav