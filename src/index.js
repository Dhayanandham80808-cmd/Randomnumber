import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

const numberDisplay = document.getElementById("number-display");
const messageBox = document.getElementById("message-box");
const generateBtn = document.getElementById("generate-btn");

const MIN = 1;
const MAX = 100;

// "number" plays the role useState(null) would play in React
let number = null;

function render() {
  numberDisplay.textContent = number === null ? "—" : number;

  if (number === null) {
    messageBox.innerHTML = `<p class="placeholder-msg">No number generated yet</p>`;
  } else {
    messageBox.innerHTML = `<p class="range-msg">Range: ${MIN} – ${MAX}</p>`;
  }
}

function generateNumber() {
  // Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
  number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  render();
}

generateBtn.addEventListener("click", generateNumber);

// initial paint — shows the placeholder message on load
render();
