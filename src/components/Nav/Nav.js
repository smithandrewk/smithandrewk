import React, { Component } from 'react'
import navAnim from './navAnim';
import './Nav.css';



export default class Nav extends Component {
    componentDidMount(){
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.hamburger');
        const navLinks = document.querySelectorAll('.nav-links li');
        let headline;
        if(document.querySelector('.headline'))
            headline = document.querySelector('.headline');

        navAnim(burger, nav, navLinks, headline);

        window.addEventListener('resize', (e) => {
            if(e.target.innerWidth>768 && nav.classList.contains('nav-active')){
                nav.classList.toggle('nav-active');
                if(document.querySelector('.headline'))
                    headline.classList.toggle('headlineActive');
                
                //Animate links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+.5}s`
                    }
                });
                //Burger Animation
                burger.classList.toggle('toggle');
            }
        });
    }
    render() {
        return (
            <nav>
                <div className="logo"><a href="coffee">AS</a></div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="about">Gallery</a></li>
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
