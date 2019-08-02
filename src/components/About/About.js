import React, { Component } from 'react'
import img from './img/5.JPG';
import img2 from './img/tay59.JPG';
import img3 from './img/tay71.JPG';
import img4 from './img/tay93.JPG';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div id="aboutBody">
                <div className="images">
                    <div className="image-container fade a">
                        <img src={img} alt="wyoming" />
                    </div>
                    <div className="image-container fade b ">
                        <img src={img2} alt="keys" />
                    </div>
                    <div className="image-container fade c">
                        <img src={img3} alt="montana" />
                    </div>
                    <div className="image-container fade d">
                        <img src={img4} alt="charlotte" />
                    </div>
                </div>

            </div>
        )
    }
}
