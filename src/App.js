import React, { Component } from "react";

// import './App.css';
import "./murrent.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Landing from "./components/Landing/landing";
import LogIn from "./components/authentication/LogIn";
import SignUp from "./components/authentication/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavbarHidden: false
    };
  }

  render() {
    return (
      <div className="App container-fluid">
        <BrowserRouter>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/register" component={SignUp} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
