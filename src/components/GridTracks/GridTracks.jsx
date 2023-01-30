import { useEffect, useState } from "react";
import React from "react";
import Movie from "../../Data/Movie";
import Filter from "../Filter/Filter";
import { motion, AnimatePresence } from 'framer-motion'
import "./styles.css";

const GridTracks = () => {
  
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopular();
  }, [])

  const fetchPopular = async () => {

    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=46d07fc7d71b2a6c994404d2af16531c&language=en-US&page=1")
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);


  }

  return (
    <div className = "GridTracks">
      <div className = "container-div">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre = {activeGenre} setActiveGenre = {setActiveGenre}/>
        <motion.div layout className="popular-movies">
          <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key ={movie.id} movie = {movie}/>
          })}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>

  )
  
};

export default GridTracks;
