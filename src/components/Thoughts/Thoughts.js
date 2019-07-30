import React, { Component } from 'react';
import './Thoughts.css';
const firebase = require('./firebase');

export default class Thoughts extends Component {

    async componentDidMount(){
        // Init Stack
        const thoughtList = document.getElementById("thoughtList");
        const submitButton = document.getElementById("submitButton");
        const thoughtInput = document.getElementById("thoughtInput");
        //Event Listeners
        submitButton.addEventListener("click", () => {
            firebase.add(thoughtInput.value)
        });
        thoughtInput.addEventListener("keypress", (event) => {
            firebase.inputKeyPress(event)
        });
        thoughtList.addEventListener("click", (event) => {
            if (event.target.className === "fas fa-trash fa-lg") {
                firebase.del(event.target.id);
            }
        });
        firebase.init(thoughtList, submitButton, thoughtInput);
        await firebase.getThoughts();
        thoughtInput.style.display = 'initial';
        submitButton.style.display = 'initial';


    }
    render() {
        return (
            <div id="one">
                <ul id="thoughtList">
                    <li id="initialLi"></li>
                </ul>
                <div id="two">
                    <input style={{display: 'none'}} id="thoughtInput" type="text" placeholder="insert new thought"/>
                    <button style={{display: 'none'}} type="submit" id="submitButton">submit</button>
                    <br/>
                </div>
            </div>

        )
    }
}
