const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBWG4vFLiak3DBK7EYwvPZW9g55IAARdrQ",
    authDomain: "f01123-29de4.firebaseapp.com",
    databaseURL: "https://f01123-29de4.firebaseio.com",
    projectId: "f01123",
    storageBucket: "f01123.appspot.com",
    messagingSenderId: "222751585364",
    appId: "1:222751585364:web:508ce947ec9f3c6f"
}

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(app);
//Init stack
let thoughtList;
let submitButton;
let thoughtInput;

const init = (aThoughtList, aSubmitButton, aThoughtInput) => {
    thoughtList = aThoughtList;
    submitButton = aSubmitButton;
    thoughtInput = aThoughtInput;
}

const getThoughts = () => {
    db.collection('thoughts').get()
        .then(docs => {
            docs.forEach(doc => {
                let div = document.createElement('div');
                div.id = doc.id;
                thoughtList.appendChild(div);
                let li = document.createElement('li');
                let i = document.createElement("i");
                i.className = "fas fa-trash fa-lg";
                i.id = doc.id;
                let hr = document.createElement('hr');
                li.appendChild(document.createTextNode(doc.data().thought));
                div.appendChild(li);
                div.appendChild(i);
                div.appendChild(hr);
            })
        }).catch(err => console.log(err));
}


const add = (aThought) => {
    db.collection("thoughts").doc(Date.now().toString()).set({
            thought: aThought
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
    addThoughtWithinSession(aThought);
}

const del = (id) => {
    console.log(id)
}

const addThoughtWithinSession = (thought) => {
    let div = document.createElement('div');
    //div.id=item.id;
    thoughtList.appendChild(div);
    let li = document.createElement('li');
    let i = document.createElement("i");
    i.className = "fas fa-trash fa-lg";
    i.id = "trash";
    let hr = document.createElement('hr');
    li.appendChild(document.createTextNode(thought));
    div.appendChild(li);
    div.appendChild(i);
    div.appendChild(hr);
}

const inputKeyPress = (event) => {
    if (event.keyCode === 13) {
        add(thoughtInput.value)
    }
}

module.exports = {
    init,
    getThoughts,
    add,
    del,
    inputKeyPress
}