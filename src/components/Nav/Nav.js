import React, { Component } from 'react'
import navAnim from './navAnim';


export default class Nav extends Component {
    componentDidMount(){
        navAnim();
    }
    render() {
        return (
            <nav>
                <div className="logo">
                    {/* <h1>Contact</h1> */}
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="thoughts">Thoughts</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        )
    }
}
