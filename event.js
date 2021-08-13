'use strict'

const MAX = 100;
const LEN = 10;
const SECTION = document.getElementById("section");
const USER_PROFILE = document.getElementById("username");
const TITLE = document.getElementById("title");

window.addEventListener("DOMContentLoaded", detectClick);

function detectClick() {
    // Collect user input here
    let use = userProfile();
    let use_append = use === "There" ? "You just clicked on " : use + ", you just clicked on ";
    // prompt user to input his/her name. todo
    //  Generates 1 - 10
    // start for to generate numbers
    for (let i = 0; i < LEN; i++) {
        createButtons(generateNumber());
    }
    // end for
    const BUTTONS = document.querySelectorAll(".squares");
    let state;
    let STATE_VALUE = "";
    // console.log("Hey There!");
    // console.log(BUTTONS);
    for (let i = 0; i < LEN; i++) {
        // console.log(value);
        BUTTONS[i].addEventListener("click", () => {
            let value = BUTTONS[i].innerHTML;
            let msg = "";
            msg = use_append + value;
            if (STATE_VALUE === value && state === i) {
                msg = use_append + "the same button (" + value + ")";
            }
            if (STATE_VALUE === value && state !== i && state !== undefined) {
                msg = use_append + "a button whose position is (" + (i + 1) + ") and value equal to the previous button you've clicked at position (" + (state + 1) + ")";
            }
            // keep track of button clicked in multiple times
            state = i;
            //console.log(value);
            const displayClickedButton = document.getElementById("displayResult");
            // console.log("Display: " + value);
            displayClickedButton.innerHTML = msg;
            STATE_VALUE = value;
            // TODO => div popup
            //alert(msg);
        });
    }
}

function generateNumber() {
    return Math.floor(Math.random() * MAX) + 1;
}

function createButtons(number) {
    // This dynamically create instance of html button on the page and appending it to its parent called #section
    var button = document.createElement("div");
    button.setAttribute("class", "squares");
    button.innerHTML = number;
    SECTION.appendChild(button);
}

function userProfile() {
    // Prompt user to supply his/her name.
    let n = window.prompt("Enter your name: ");
    let bool = n !== "";
    const username = bool ? "Welcome " + n + "!" : "You are welcome!";
    USER_PROFILE.innerHTML = username.toLocaleUpperCase().toString();
    let use = bool ? username.trim().split(" ")[1].toString().toUpperCase() : "There";
    if (use !== "There") {
        TITLE.innerHTML = "Hey " + use + "! I'm Mr. Click Detector"
    } else {
        TITLE.innerHTML = "Hey! I Am Mr. Click Detector"
    }
    return use;
}