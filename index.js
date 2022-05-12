const divContainer = document.querySelector(".grid-container");

for (let j = 0; j < 256; j++) {
  let square = document.createElement("div");
  square.classList.add("grid-square");
  divContainer.appendChild(square);
}

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
