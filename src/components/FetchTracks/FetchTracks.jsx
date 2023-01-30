import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'

const ArtistTracks = () => {
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    const accessToken = 'BQCnziL7KhlcPRnuDi98-nNQg0_1O1jL72mGce60uDshcyzBqhxMgS5T-umgpvjQNdG3ZzMd98--wgwRcWZyurb55wQS8OyNzAcEKsNpoZkWUmAD0vL0kZUq7XV4M97vODRdhfs_CvaDDpinCxoinIo53zkAsxe9ohWMJNwnelQqqPQWcL8eOW8j8FqTuGHCp9M'
    const artistId = '1IQ4CjwKkdARjL5KtYiMt4'
    useEffect(() => {
      const fetchAlbums = async () => {
        const res = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
  
        setAlbums(res.data.items);
      };
  
      fetchAlbums();
    }, [artistId, accessToken]);
  
    useEffect(() => {
      const fetchTracks = async () => {
        const trackPromises = albums.map(album =>
          axios.get(`https://api.spotify.com/v1/albums/${album.id}/tracks`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
        );
  
        const trackData = await Promise.all(trackPromises);
        const allTracks = trackData.reduce((acc, album) => [...acc, ...album.data.items], []);
  
        setTracks(allTracks);
      };
  
      if (albums.length > 0) {
        fetchTracks();
      }
    }, [albums, accessToken]);
  
    return (
      <div>
        {tracks.map(track => (
          <div key={track.id}>
            {track.album && (
              <img src={track.album.images[0].url} alt={`Album cover of ${track.name}`} />
            )}
            <p>{track.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ArtistTracks;