import React from 'react'
import SwiperComp from "../../components/SwiperComp/SwiperComp";
import SideAlters from "../../components/SideAlters/SideAlters";
import './styles.css'

export const Home = () => {
  return (
  <div>
    <header>
    <div className="home-info">
      <h1>This is Ez Mil</h1>
      <p>
        EZ Mil's music often addresses social
        and political issues, as well as personal experiences, making him
        one of the most relatable artists in the Philippines. He has
        released several popular songs and albums, and continues to be a
        prominent figure in the country's hip-hop scene.
      </p>
    </div>  
  </header>
  <SideAlters />
  <SwiperComp />
  </div>
  )
}
