import React from 'react';
import './styles.css'
import singleimg from '../../../container/img/act.jpg'

const Single = () => {

  return (
    <div className="card-container">
        <img src={singleimg} alt="" />
        <h4>Single</h4>
        <h2>27 Bodies</h2>
    </div>
  );
};

export default Single;