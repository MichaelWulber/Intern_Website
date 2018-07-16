import React from 'react';
import './Section.css';

const Section = (props) =>
  <div className="section" data-aos="fade-up">
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </div>

export default Section;
