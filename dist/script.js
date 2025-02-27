"use strict";
var bgButton = document.getElementById("bg-btn");
var timeButton = document.getElementById("time-btn");
var msgButton = document.getElementById("msg-btn");
var textColorButton = document.getElementById("text-color-btn");
var resetButton = document.getElementById("reset-btn");
var quoteButton = document.getElementById("quote-btn");
var output = document.getElementById("output");
// Function to change background color randomly
bgButton.addEventListener("click", function () {
    var colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ff99ff"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log("Changing background color to:", randomColor);
    document.body.style.backgroundColor = randomColor;
});
// Function to show the current time
timeButton.addEventListener("click", function () {
    var now = new Date();
    output.innerText = "Current Time: ".concat(now.toLocaleTimeString());
});
// Function to display a custom message
msgButton.addEventListener("click", function () {
    output.innerText = "You clicked the message button!";
});
// Function to change text color randomly
textColorButton.addEventListener("click", function () {
    var textColors = ["#000000", "#FF5733", "#33FF57", "#3357FF", "#F33FFF"];
    var randomColor = textColors[Math.floor(Math.random() * textColors.length)];
    console.log("Changing text color to:", randomColor);
    output.style.color = randomColor;
});
// Function to reset background color
resetButton.addEventListener("click", function () {
    console.log("Resetting background color to white.");
    document.body.style.backgroundColor = "white";
    output.style.color = "black"; // Reset text color to black
});
// Function to display a random quote
var quotes = [
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don’t take.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Don’t watch the clock; do what it does. Keep going."
];
quoteButton.addEventListener("click", function () {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerText = randomQuote;
});
