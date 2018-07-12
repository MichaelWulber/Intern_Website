import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>intern website!</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
