import { useEffect } from "react";
import './styles.css'
import React from "react";

const Filter = ({setActiveGenre, activeGenre, setFiltered, track}) => {

    useEffect(() => {

        if (activeGenre === ''){
            setFiltered(track);
            return;
        }
        const filtered = track.filter((track) => track.genre.includes(activeGenre))
        setFiltered(filtered);

    }, [activeGenre])

  return (
  <div className="filter-container">
    <button className = {activeGenre === '' ? "active" : ""} onClick={() => {setActiveGenre('')}}>All</button>
    <button className = {activeGenre === 'Rap' ? "active" : ""} onClick={() => {setActiveGenre('Rap')}}>Rap</button>
    <button className = {activeGenre === 'RnB' ? "active" : ""} onClick={() => {setActiveGenre('RnB')}}>RnB</button>
    <button className = {activeGenre === 'Rock' ? "active" : ""} onClick={() => {setActiveGenre('Rock')}}>Rock</button>

  </div>
  );
};

export default Filter;
