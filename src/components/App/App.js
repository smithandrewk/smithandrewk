import React from 'react';
import Nav from '../Nav/Nav';
import Section from '../Section/Section';
import Thoughts from '../Thoughts/Thoughts';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';


class App extends React.Component {
  componentDidMount(){

  }
  render(){
    return (
      <Router>
        <div className="App">
          <Nav/>
            <Switch>
              <Route path="/" exact component={Section}/>
              <Route path="/thoughts" component={Thoughts}/>
            </Switch>
          <div className="slider"></div>
        </div>
      </Router>
    );
  }
}

export default App;
