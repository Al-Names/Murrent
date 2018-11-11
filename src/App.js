import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
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
           
           <Switch>                
                    <Route exact path="/" component={Landing} />
                    {/* <Route path="/profile/:id" component={Profile} />
                    <Route path="/articleview/:id" component={ArticleView} />
                    <Route path="/editor" component={Editor} /> */}
                    <Route path="**" component={Landing} />
            </Switch>
           <Footer/>
      </div>

    );
  }
}

export default App;
