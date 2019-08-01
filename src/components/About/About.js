import React, { Component } from 'react'
import img from './5.JPG';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div id="aboutBody">
                <h1>This page is under construction.</h1>
                <img src={img} alt="img" id="img"/>
            </div>
        )
    }
}
