import React from 'react';
import './styles.css'
import singleimg from '../../../container/img/act.jpg'

const Single = () => {

  return (
    <div className="card-container">
      <div className="img-ctnr">
      <div className= "btncontainerlisten">
          <a
            href="https://open.spotify.com/track/2EEj4xqP1kOOxN2xK4cQ4i?si=ec4ab9c584fe4bd7"
            rel="noreferrer"
            target="_blank"
            className="buy"
          >
            Listen
          </a>
        </div>
        <img src={singleimg} alt="" />

      </div>
        <h4>Single</h4>
        <h2>27 Bodies</h2>
    </div>
  );
};

export default Single;

