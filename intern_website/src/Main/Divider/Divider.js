import React from 'react';
import './Divider.css';

const Divider = (props) =>
  <div className="divider">
    <img src={props.filename} alt="divider" width="100%"></img>
  </div>

export default Divider;
