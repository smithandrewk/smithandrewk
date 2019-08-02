import React, { Component } from 'react';
import startupAnim from './startupAnim';
import cover from './img/cover.JPG';
import './Section.css';

export default class Section extends Component {
    async componentDidMount(){
        await startupAnim();
        const headline = document.querySelector('.headline');
        headline.setAttribute('style', '');
    }
    render() {
        return (
            <div id="dawg">
                <section>
                    <div className="hero">
                        <img src={cover} alt="hero"/>

                    </div>
                </section>
                <div id="big">
                    <h1 className="headline">Andrew Smith</h1>
                </div>

            </div>

        )
    }
}
