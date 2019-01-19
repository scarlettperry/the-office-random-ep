import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Button from './Button.js'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Button />
      </div>
    );
  }
}

export default App;
