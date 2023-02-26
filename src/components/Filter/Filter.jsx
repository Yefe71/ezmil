import { useEffect } from "react";
import filcss from './styles.module.css';
import React from "react";

const Filter = ({setActiveGenre, activeGenre, setFiltered, track}) => {

  useEffect(() => {
    if (activeGenre === '') {
      setFiltered(track);
      return;
    }
    const filtered = track.filter((track) => track.genre.includes(activeGenre));
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className={filcss['filter-container']}>
      <button className={`${filcss['filter-button']} ${activeGenre === '' ? filcss.active : ''}`} onClick={() => setActiveGenre('')}>All</button>
      <button className={`${filcss['filter-button']} ${activeGenre === 'Rap' ? filcss.active : ''}`} onClick={() => setActiveGenre('Rap')}>Rap</button>
      <button className={`${filcss['filter-button']} ${activeGenre === 'RnB' ? filcss.active : ''}`} onClick={() => setActiveGenre('RnB')}>Melodic</button>
      <button className={`${filcss['filter-button']} ${activeGenre === 'Rock' ? filcss.active : ''}`} onClick={() => setActiveGenre('Rock')}>Heavy</button>
    </div>
  );
};

export default Filter;
