import React from 'react';
import './styles.css'
const Diagonal = ({ id, src, text }) => {
  return (
    <div className="diagonal" id={id}>
      <img src={src} />
      <p className="overlay">{text}</p>
    </div>
  );
};

const Container = () => {
  return (
    <div className="container1">
      <Diagonal
        id="d0"
        src="http://www.shortpacked.com/comics/2013-02-08-prologue.png"
        text="TEST"
      />
      <Diagonal
        id="d1"
        src="http://www.questionablecontent.net/comics/2381.png"
        text="TEST"
      />
      <Diagonal
        id="d2"
        src="http://www.shortpacked.com/comics/2005-01-17-bow-before-your-master.gif"
        text="TEST"
      />
      <Diagonal
        id="d3"
        src="http://www.questionablecontent.net/comics/2021.png"
        text="TEST"
      />
      <Diagonal
        id="d4"
        src="http://www.shortpacked.com/comics/2009-03-27-fourohfour.png"
        text="TEST"
      />
      <Diagonal
        id="d5"
        src="http://www.questionablecontent.net/comics/2021.png"
        text="TEST"
      />
      <Diagonal
        id="d6"
        src="http://www.shortpacked.com/comics/2009-03-27-fourohfour.png"
        text="TEST"
      />
      <Diagonal
        id="d7"
        src="http://www.questionablecontent.net/comics/2021.png"
        text="TEST"
      />
      <Diagonal
        id="d8"
        src="http://www.shortpacked.com/comics/2009-03-27-fourohfour.png"
        text="TEST"
      />
      <Diagonal
        id="d9"
        src="http://www.shortpacked.com/comics/2009-03-27-fourohfour.png"
        text="TEST"
      />
    </div>
  );
};

export default Container;