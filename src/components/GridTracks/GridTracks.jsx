import { useEffect, useState, useRef } from "react";
import React from "react";
import tracks from "../../Data/TracksData";
import Track from "../sub-components/TrackItem/Track";
import Filter from "../Filter/Filter";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import search from "../../container/img/search.svg";

const GridTracks = () => {
  const [track, setTracks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("null");
  const [searchTerm, setSearchTerm] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const searchInput = useRef(null);

  useEffect(() => {
    fetchTracks();
  }, []);

  useEffect(() => {
    if (searchTerm === ""){
      setFiltered(tracks.sort(() => 0.5 - Math.random()));
    } 
  }, [searchTerm]);

  const resetGenre = () => {
    setActiveGenre("null")

  };

  const fetchTracks = async () => {
    setTracks(tracks.sort(() => 0.5 - Math.random()));
    setFiltered(tracks.sort(() => 0.5 - Math.random()));
  };

  const searchTracks = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setFiltered(tracks.sort(() => 0.5 - Math.random()));
    }
    setFiltered(
      track.filter((track) =>
        track.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };


  const handleImageClick = () => {
    searchInput.current.focus();
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="GridTracks"
    >
      <div className="container-div">
        <div className="header-wrapper">
          <h1>Discography</h1>

          <div className="wrapper">
          <div className="leftgroup">
              <img onClick={handleImageClick} src={search} className="search2" alt="" />
              <div className="input-group">
                <input
                  type="text"
                  ref={searchInput}
                  onClick={resetGenre}
                  onChange={(e) => searchTracks(e)}
                  placeholder="Search"
                  className="search"
                />
              </div>
            </div>

           
            {!inputFocus && (
              <Filter
                track={track}
                setFiltered={setFiltered}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
              />
            )}
          </div>
        </div>

        <motion.div className="popular-movies">
          <AnimatePresence>
            {filtered.map((track) => {
              return <Track key={track.id} track={track} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GridTracks;
