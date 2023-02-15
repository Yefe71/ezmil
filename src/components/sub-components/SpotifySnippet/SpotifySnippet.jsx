import React from 'react';

const SpotifySnippet = (props) => {
  return (
    <iframe 
    title="Spotify Track Embed"
    style={{ 
        borderRadius: '12px', 

      }}
      src= {`https://open.spotify.com/embed/track/${props.tracklink}?utm_source=generator&theme=0`}
      width="100%" 
      height="100%" 
      frameBorder="0" 
      allowFullScreen 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy"
    />
  );
};

export default SpotifySnippet;