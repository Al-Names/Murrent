import React, { Component } from 'react';

// import './App.css';
import "./murrent.css";

import Navbar from './components/nav/navbar';
import Footer from './components/footer'

import Landing from './components/Landing/landing';

class App extends Component {
  render() {
    return (
      <div class="container-fluid"> 
           <Navbar/>
           <Landing/>
           <Footer/>
      </div>

    );
  }
}

export default App;
