import React, { Component } from 'react';

// import './App.css';
import "../murrent.css";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-fixed-top amatic">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Murrent</a>
                    </div>


                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">About <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">Articles</a></li>
                            <li><a href="#">Posts</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Current Mood</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        );
    }
}

export default Navbar;