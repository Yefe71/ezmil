import "./styles.css";

export default function AlbumInfo(props) {
  return (
    <div className="album-info">
      <h1 className="album-title">{props.title}</h1>
      <p>
        DU4LI7Y explains how he is as a person and his music journey which
        hasn't been the easiest for him. The reason his album title spelled
        duality with 4 & 7 was because of the number code of Olongapo City where
        the young rapper grew up. “I don’t necessarily have to be too much of
        anything else [and] just be myself. I feel like I’m two people which
        explains the album art. I’m excited for everyone to listen to the first
        song on this album specifically because it just breaks me down,” he
        added.The latest 10-track project is a continuation of his first album,
        Act 1, which was released in 2020. In his first album, EZ was enveloped
        by a haze of darkness and in DU4LI7Y, he is seen to emerge from the
        darkness and back to light as he goes back to his roots and to himself.
      </p>
      <div className="bottom-info">
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
  );
}
