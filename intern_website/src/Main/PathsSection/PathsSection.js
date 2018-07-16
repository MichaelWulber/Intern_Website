import React from 'react';
import './PathsSection.css';
import Path from './Path'

const PathsSection = () =>
  <div className="pathsSection">
    <Path title="Path 1" type="path_1"/>
    <Path title="Path 2" type="path_2"/>
    <Path title="Path 3" type="path_3"/>
    <Path title="Path 4" type="path_4"/>
    <Path title="Path 5" type="path_5"/>
  </div>

export default PathsSection;
