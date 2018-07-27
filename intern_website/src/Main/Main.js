import React from 'react';
import './Main.css';
import Section from './Section/Section';
import PathsSection from './PathsSection/PathsSection';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import {aboutContent, pastInternsContent} from '../Config/Content'

const Main = (props) =>
  <div className="main">
    <Section title="About" text={aboutContent}/>
    <PathsSection paths={props.paths}/>
    <Section title="Past Interns" text={pastInternsContent}/>
    <Gallery />
    <Footer />
  </div>

export default Main;
