import React from 'react'
import './styles.css'
import GridTracks from '../../components/GridTracks/GridTracks'
import SwiperComp from '../../components/SwiperComp/SwiperComp'


export const Discography = () => {
  return (
    <div className='disco-wrapper'>
      <h1 className='disco-title'>DISCOGRAPHY</h1>
      <h3 className='albums-title'>ALBUMS & EP</h3>
    <SwiperComp/>
    <GridTracks/>
    </div>
  )
}
