const button = document.querySelector(".button");

function makeGrid(size) {
  let divContainer = document.querySelector(".grid-container");
  let squares = divContainer.querySelectorAll("div");
  // Resets the grid
  squares.forEach((div) => div.remove());
  divContainer.style.setProperty("--grid-size", size);
  for (let j = 0; j < size ** 2; j++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    divContainer.appendChild(square);
    // Hover Effect
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    square.addEventListener("mouseover", () => {
      square.style.background = "#" + randomColor;
    });
  }
}

button.addEventListener("click", () => {
  let numSquares = prompt("Please enter number of squares per side:");
  if (numSquares >= 2 && numSquares <= 100) {
    makeGrid(numSquares);
  } else {
    console.log("Invalid Input! Too many squares!");
  }
});

/* Alternative Method to making the Grid using Float property */
// const divContainer = document.querySelector(".grid-container");
// for (let i = 0; i < 16; i++) {
//   let row = document.createElement("div");
//   row.classList.add("grid-row");
//   for (let j = 0; j < 16; j++) {
//     let square = document.createElement("div");
//     square.classList.add("grid-square");
//     row.appendChild(square);
//   }
//   divContainer.appendChild(row);
// }
