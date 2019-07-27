import React from 'react';
import Nav from '../Nav/Nav';
import Section from '../Section/Section';
import startupAnim from './startupAnim'
import './App.css';


class App extends React.Component {
  componentDidMount(){
    startupAnim();
  }
  render(){
    return (
      <div className="App">
        <Nav/>
        <Section/>
        <div className="slider"></div>
      </div>
    );
  }
}

export default App;
