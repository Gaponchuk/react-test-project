import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
      </div>
    );
  }
}

export default App;
