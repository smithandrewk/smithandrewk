import React, { Component } from 'react'
import img from './cover.JPG';

export default class Section extends Component {
    render() {
        return (
            <section>
                <div className="hero">
                    <img src={img} alt="hero"/>
                    <h1 className="headline">Andrew Smith</h1>
                </div>
            </section>
        )
    }
}
