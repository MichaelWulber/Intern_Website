import React from 'react';
import './Main.css';
import Section from './Section/Section';
import PathsSection from './PathsSection/PathsSection';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';

const pastInterns = "[ Here we would love to showcase some of the intern experiences, " +
                    "what tools they've learned, some projects they have worked on and their favorite aspects of the internship program ]";
const aboutText = "Seeking IT interns for Florida Blue's Internship. The program will be located at Florida Blue's Deerwood Campus. " +
                  "This program is focused on providing interns exposure to Florida Blue's business processes and the IT systems that support it. " + 
                  "During their time here, they will have the opportunity to learn about our IT Command Center, World Class Data Center, Information Security, " +
                  "Data Analytics, Software Development teams and their practices, and the Innovation Departments. " +
                  "During the program, they will get exposure to Senior IT Leadership and will have the opportunity to present their internship project outcomes at the end of the program. " +
                  "Candidates have the opportunity to apply to one of the 5 internship tracks:";

const Main = (props) =>
  <div className="main">
    <Section title="About" text={aboutText}/>
    <PathsSection paths={props.paths}/>
    <Section title="Past Interns" text={pastInterns}/>
    <Gallery />
    <Footer />
  </div>

export default Main;
