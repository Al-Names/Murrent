import React, { Component } from 'react';

// import './App.css';
import "./landing.css";

import Header from '../header'
import Squares from '../squares';

import Feed from '../feed'

class Landing extends Component {
    render() {
        return (
            <div class="container-fluid">

                <Header />
                <Squares />
                <div class="row container center-block">


                    <div class="aboutText text-center container col-lg-6">

                        <h1 class="controversy" id="about">About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="container rulesText col-lg-6">
                        <h1 class="diversity text-center">How it Works</h1>
                        <ul>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row container center-block">
                    <div>
                        <h3 className="text-center col-lg-6 rulesText aboutText">Sign In</h3>
                    </div>
                    <div>
                        <h3 className="text-center col-lg-6 aboutText rulesText">Sign Up</h3>
                    </div>
                </div>
            </div>


        );
    }
}

export default Landing;
