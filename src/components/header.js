import React, { Component } from 'react';

// import './App.css';
import "../murrent.css";

class Header extends Component {
  render() {
    return (
        <div class="container-fluid">    
        <div class="text-center">
          <h1 id="heading"><span class="diversity">Diversity</span><span class="amatic" id="strokes"> || </span><span class="controversy">Controversy</span></h1>
          <hr />

        </div>
      </div>
    );
  }
}

export default Header;
