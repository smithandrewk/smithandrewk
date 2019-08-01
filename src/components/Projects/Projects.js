import React, { Component } from 'react';
import a from './a';
import './Projects.css';

export default class Projects extends Component {
    componentDidMount(){
        a.a(document)
    }
    render() {
        return (
            <div id="projectsBody">
                <h1>What's your favorite number?</h1>
                <p id="fact-container"></p>
                <div className="form">
                    <input id="a" type="text" name="name" required autoComplete="off"/>
                    <label htmlFor="name" className="label-name">
                        <span className="content-name">Number</span>
                    </label>
                </div>
            </div>
        )
    }
}
