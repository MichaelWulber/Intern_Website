import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import IT_Paths from './Config/PathConfig';

class App extends Component {
  state = {
    paths: IT_Paths,
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Main paths={this.state.paths}/>
        <Footer />
      </div>
    );
  }
}

export default App;
