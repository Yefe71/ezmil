import React from 'react'
import './styles.css'
import GridTracks from '../../components/GridTracks/GridTracks'
import SwiperComp from '../../components/SwiperComp/SwiperComp'


export const Discography = () => {
  return (
    <div className='disco-wrapper'>
      <h1 className='disco-title'>Discography</h1>
    
    <SwiperComp/>
    <GridTracks/>
    </div>
  )
}
