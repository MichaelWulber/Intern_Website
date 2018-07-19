import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import IT_PATHS from './Config/PathConfig';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main paths={IT_PATHS}/>
        <Footer />
      </div>
    );
  }
}

export default App;
