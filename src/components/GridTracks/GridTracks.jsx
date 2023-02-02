import { useEffect, useState } from "react";
import React from "react";
import tracks from "../../Data/Tracks";
import Track from "../../Data/Track";
import Filter from "../Filter/Filter";
import { motion, AnimatePresence } from 'framer-motion'
import "./styles.css";

const GridTracks = () => {
  
  const [track, setTracks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState('')

  useEffect(() => {
    fetchTracks();
  }, [])

  const fetchTracks = async () => {

    setTracks(tracks.sort( () => .5 - Math.random() ));
    setFiltered(tracks.sort( () => .5 - Math.random() ));


  }

  return (
    <motion.div initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity:0}} className = "GridTracks">
      <div className = "container-div">
        <h1>Discography</h1>
      <Filter track={track} setFiltered={setFiltered} activeGenre = {activeGenre} setActiveGenre = {setActiveGenre}/>
        <motion.div className="popular-movies">
          <AnimatePresence>
          {filtered.map(track => {
            return <Track key ={track.id} track = {track}/>
          })}
          </AnimatePresence>
        </motion.div>
      </div>

    </motion.div>

  )
  
};

export default GridTracks;
