import React from 'react';
import './styles.css'

const SpotifyPlayer = ( albumId ) => {
  
  return (
    <iframe
      className='albumEmbed'
      src={`https://open.spotify.com/embed/album/${albumId.albumid}`}
      width="100%"
      height="352"
      frameBorder="0"
      allow="encrypted-media"
      title="Spotify Player"
    />
  );
};

export default SpotifyPlayer;