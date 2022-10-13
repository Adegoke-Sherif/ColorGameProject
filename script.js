("use strict");

let numSquares = 6;

let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("displayColor");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});
resetButton.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random colors from arrays
  pickedColor = pickColor();
  this.textContent = "New colors";
  messageDisplay.textContent = "";
  //change colorDisplay to match pikced color
  colorDisplay.textContent = pickedColor;

  //change color of squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function () {
    // grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    //compare color to pick color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    //chamge each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.trunc(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // add num random colors to array
  for (i = 0; i < num; i++) {
    // get random colors and push to arrays
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick a red from 0-256
  let r = Math.trunc(Math.random() * 256);
  //pick a green from 0-256
  let g = Math.trunc(Math.random() * 256);
  //pick a blue from 0-256
  let b = Math.trunc(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
