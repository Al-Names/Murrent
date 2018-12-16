import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// import './App.css';
import "../murrent.css";

class Navbar extends Component {
  render() {
    if (window.location.pathname === "/login")
      return (
        <nav className="navbar navbar-default navbar-fixed-top amatic">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                Murrent
              </a>
            </div>
          </div>
        </nav>
      );
    if (window.location.pathname === "/register")
      return (
        <nav className="navbar navbar-default navbar-fixed-top amatic">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                Murrent
              </a>
            </div>
          </div>
        </nav>
      );

    return (
      <nav className="navbar navbar-default navbar-fixed-top amatic">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">
              Murrent
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="">
                <a href="#">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
              <li>
                <a href="#">Posts</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
