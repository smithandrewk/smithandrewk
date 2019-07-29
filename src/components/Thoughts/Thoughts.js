import React, { Component } from 'react';
const firebase = require('./firebase');

export default class Thoughts extends Component {

    componentDidMount(){
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
        firebase.getThoughts();

    }
    render() {
        return (
            <div>
                <ul id="thoughtList">
                    <li></li>
                </ul>
                <input id="thoughtInput" type="text" placeholder="insert new thought"/>
                <button type="submit" id="submitButton">submit</button>
                <br/>

            </div>

        )
    }
}
