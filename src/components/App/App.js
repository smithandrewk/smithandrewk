import React from 'react';
import Nav from '../Nav/Nav';
import Section from '../Section/Section';
import Thoughts from '../Thoughts/Thoughts';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Coffee from '../Coffee/Coffee';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Section}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/thoughts" component={Thoughts}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>
            <Route path="/coffee" component={Coffee}/>
          </Switch>
          <div className="slider"></div>
        </Router>
      </div>
    );
  }
}

export default App;
