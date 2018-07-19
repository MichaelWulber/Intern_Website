import React from 'react';
import './Path.css';

const Path = (props) =>
  <div className={props.type}>
    <h2>{props.title}</h2>
  </div>

export default Path;
