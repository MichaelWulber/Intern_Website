import React from 'react';
import './Main.css';
import Section from './Section/Section';
import PathsSection from './PathsSection/PathsSection';
import Divider from './Divider/Divider';

const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const about_text = "Seeking IT interns for Florida Blue's Internship. The program will be located at Florida Blue's Deerwood Campus. This program is focused on providing interns exposure to Florida Blue's business processes and the IT systems that support it. During their time here, they will have the opportunity to learn about our IT Command Center, World Class Data Center, Information Security, Data Analytics, Software Development teams and their practices, and the Innovation Departments. During the program, they will get exposure to Senior IT Leadership and will have the opportunity to present their internship project outcomes at the end of the program. Candidates have the opportunity to choose from one of the 5 internship tracks:";
const IT_paths = lorem_ipsum;
const past_interns = lorem_ipsum;

const Main = (props) =>
  <div className="main">
    <Section title="About" text={about_text}/>
    {/*<Divider filename={"/div_1.png"}/>*/}
    <PathsSection paths={props.paths}/>
    {/*<Divider filename={"/div_3.png"}/>*/}
    <Section title="Past Interns" text={lorem_ipsum}/>
    {/*Divider filename={"/div_2.png"}/>*/}
  </div>

export default Main;
