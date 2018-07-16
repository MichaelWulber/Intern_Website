import React from 'react';
import './Path.css';

const Path = (props) =>
  <div class={props.type}>
    <h2>{props.title}</h2>
  </div>

export default Path;
