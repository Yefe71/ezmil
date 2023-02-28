import "./styles.css";

export default function AlbumInfo(props) {
  return (
    <>
      <div className="album-info">
        
        <div className="left-info">
          <img className="imgAlbum" src={props.thumb} alt="" />
        </div>

        <div className="middle-info">
          <div className="middle-info-top">
            <h1 className="album-title">{props.title}</h1>
            <p>
            {props.desc}
            </p>
          </div>

          <div className="middle-info-bottom">
            <div className="desc">
              <h3>
                Released: <span>{props.date}</span>
              </h3>
              <h3>
                Length: <span>{props.length}</span>
              </h3>
              <h3>
                Label/s: <span>FFP Records Management, Virgin Music</span>
              </h3>
            </div>
            <div className="stream-info">
              <h2>AVAILABLE ON</h2>
              <div className="logos">
                <a href={props.spotLink}>
                  <img
                    className="spotify"
                    src="https://snoopdogg.com/wp-content/uploads/2021/02/spotify-1.svg"
                    alt=""
                  />
                </a>
                <a href={props.appleLink}>
                  <img
                    className="apple"
                    src="https://snoopdogg.com/wp-content/uploads/2021/02/apple-music-icon.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="right-info">
          <iframe
            className="albumEmbed"
            src={`https://open.spotify.com/embed/album/${props.albumId}`}
            width="300"
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
