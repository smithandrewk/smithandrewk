import React, { Component } from 'react'
import './Coffee.css';
const firebase = require('../../firebase');



export default class Coffee extends Component {
    async componentDidMount(){
        const coffeeButton = document.querySelector('#coffee-button');
        const coffeeForm = document.getElementsByClassName('coffee-form');
        //ordered from most recent coffee at index 0 to least recent
        const lastTenCoffees = await firebase.getCoffee();
        const mostRecentCoffee = lastTenCoffees[0];
        const mostRecentCoffeeDate = new Date(parseFloat(mostRecentCoffee.id));
        const dateArray = mostRecentCoffeeDate.toDateString().split(' ');
        const timeArray = mostRecentCoffeeDate.toTimeString().split(' ');
        const lastCoffeeDiv = document.querySelector('.last-coffee');
        lastCoffeeDiv.textContent = `${mostRecentCoffee.name} just enjoyed ${mostRecentCoffee.amount}g of ${mostRecentCoffee.roast} by ${mostRecentCoffee.brand} at ${timeArray[0]} on ${dateArray[0]}, ${dateArray[1]} ${dateArray[2]}`;

        coffeeButton.addEventListener('click', (e) => {
            console.log('adding coff');
            if(coffeeButton.classList.contains('clicked')){
                console.log('are you sure you want to add another coff in this session?');
            } else {
                coffeeButton.classList.add('clicked');
            }
            //Add coff here
            //Confirm
            let coff = {
                id: '',
                name: '',
                amount: 0,
                method: '',
                roast: '',
                brand: '',
                mug: '',
                comments: ''
            }
            for(const form of coffeeForm){
                const input = form.querySelector('input');
                const inputName = input.name;
                coff[inputName] = input.value;
            }
            coff['id'] = Date.now().toString();
            firebase.addCoffee(coff);
        });

    }
    render() {
        return (
            <div id="coffee">
                <div className="last-coffee"> 
                </div>
                <div className="coffee-form">
                    <input type="text" name="name" required autoComplete="off"/>
                    <label htmlFor="name" className="label-name">
                        <span className="content-name">Name</span>
                    </label>
                </div>
                <div className="coffee-form">
                    <input type="text" name="amount" required autoComplete="off"/>
                    <label htmlFor="amount" className="label-amount">
                        <span className="content-amount">Amount</span>
                    </label>
                </div>
                <div className="coffee-form">
                    <input type="text" name="method" required autoComplete="off"/>
                    <label htmlFor="method" className="label-method">
                        <span className="content-method">Method</span>
                    </label>
                </div>
                <div className="coffee-form">
                    <input type="text" name="roast" required autoComplete="off"/>
                    <label htmlFor="roast" className="label-roast">
                        <span className="content-roast">Roast</span>
                    </label>
                </div>
                <div className="coffee-form">
                    <input type="text" name="brand" required autoComplete="off"/>
                    <label htmlFor="brand" className="label-brand">
                        <span className="content-brand">Brand</span>
                    </label>
                </div>
                <div className="coffee-form">
                    <input type="text" name="mug" required autoComplete="off"/>
                    <label htmlFor="mug" className="label-mug">
                        <span className="content-mug">Mug</span>
                    </label>
                </div>
                <div className="coffee-form">
                    <input type="text" name="comments" required autoComplete="off"/>
                    <label htmlFor="comments" className="label-comments">
                        <span className="content-comments">Comments</span>
                    </label>
                </div>
                <button type="submit" id="coffee-button">Add Coff</button>
            </div>
        )
    }
}
