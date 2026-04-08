"use strict";

const name = "Emil";
const age = "25";
const isStudent = true;

console.log("Hello world");
const message = "Javascript er sejt";
console.log(message);

const favoritMovie = "Into the wild" ;
const year = "2007";
const rating = "8";

console.log ("min favorit film er:", favoritMovie);
console.log ("den udkom i:", year);
console.log ("rating:", rating);

let points = 0;
console.log("Start:", points);

points = 1;
console.log("Efter ændring:", points);

let mood = "træt";
console.log("før:", mood);
mood = "klar til javascript";
console.log("efter:", mood);

const heading = document.querySelector("h1");
console.log(heading);

// Find h1 elementet
const heading = document.querySelector("h1");
console.log("Jeg fandt h1:", heading);

// Find count span
const countDisplay = document.querySelector("#counter");
console.log("Jeg fandt count:", countDisplay);

// Find knapperne
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");
console.log("Jeg fandt knapperne:", clickButton, resetButton);

// Ændr overskriften
heading.textContent = "Wow, jeg kan ændre tekst! ";

// Ændr count tallet
countDisplay.textContent = "42";

// Ændr tekstfarve
heading.style.color = "yellow";

// Ændr baggrund på count
countDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
countDisplay.style.padding = "10px";
countDisplay.style.borderRadius = "10px";
