import "./styles.css";

export default function AlbumInfo(props) {
  return (
    <>
      <div className="album-info">
        
        <div className="left-info">
          <img className="imgAlbum" src={props.img} alt="" />
        </div>

        <div className="middle-info">
          <div className="middle-info-top">
            <h1 className="album-title">{props.title}</h1>
            <p>
              DU4LI7Y explains how he is as a person and his music journey which
              hasn't been the easiest for him. The reason his album title
              spelled duality with 4 & 7 was because of the number code of
              Olongapo City where the young rapper grew up. “I don’t necessarily
              have to be too much of anything else [and] just be myself. I feel
              like I’m two people which explains the album art. I’m excited for
              everyone to listen to the first song on this album specifically
              because it just breaks me down,” he added.
            </p>
          </div>

          <div className="middle-info-bottom">
            <div className="desc">
              <h3>
                Released: <span>February 19, 2021</span>
              </h3>
              <h3>
                Length: <span>00:35</span>
              </h3>
              <h3>
                Label/s: <span>FFP Records Management</span>
              </h3>
            </div>
            <div className="stream-info">
              <h2>AVAILABLE ON</h2>
              <div className="logos">
                <img
                  className="spotify"
                  src="https://snoopdogg.com/wp-content/uploads/2021/02/spotify-1.svg"
                  alt=""
                />
                <img
                  className="apple"
                  src="https://snoopdogg.com/wp-content/uploads/2021/02/apple-music-icon.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="right-info">
          <iframe
            className="albumEmbed"
            src={`https://open.spotify.com/embed/album/${props.albumId}`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="encrypted-media"
            title="Spotify Player"
          />
        </div>
      </div>
    </>
  );
}
