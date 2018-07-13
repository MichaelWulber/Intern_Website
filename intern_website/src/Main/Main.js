import React from 'react';
import './Main.css';
import Section from './Section/Section';
import Divider from './Divider/Divider';

const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Main = () =>
  <div className="main">
    <Section title="IT Paths" text={lorem_ipsum}/>
    <Divider filename={"/div_1.png"}/>
    <Section title="Past Interns" text={lorem_ipsum}/>
    <Divider filename={"/div_2.png"}/>
    <Section title="Location" text={lorem_ipsum}/>
    <Divider filename={"/div_3.png"}/>
  </div>

export default Main;
