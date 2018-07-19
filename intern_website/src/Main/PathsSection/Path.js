import React from 'react';
import './Path.css';

const Path = (props) =>
  <div class={props.type}>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>

export default Path;
