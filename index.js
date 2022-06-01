const gridContainer = document.querySelector(".grid-container");
const activeBtns = document.querySelectorAll(".btn");
const dimensions = document.querySelector(".dimensions");
const colorPicker = document.querySelector(".colorPicker");
const colorButton = document.querySelector(".colorButton");
const rainbowButton = document.querySelector(".rainbowButton");
const clearButton = document.querySelector(".clearButton");
const gridSizeSlider = document.querySelector(".gridSizeSlider");

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorButton.onclick = () => setCurrentMode("color");
rainbowButton.onclick = () => setCurrentMode("rainbow");
clearButton.onclick = () => reloadGrid();
gridSizeSlider.onmousemove = (e) => updateDimensions(e.target.value);
gridSizeSlider.onchange = (e) => changeGridSize(e.target.value);

const defaultSize = 16;
const defaultMode = "color";
const defaultColor = "#333333";

let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;
let click = true;

// So that buttons and inputs dont affect grid mode
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
    click = !click;
  }
});

window.onload = () => {
  makeGrid(defaultSize);
};

// Toggle between active buttons
activeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    activeBtns.forEach((f) => f.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentMode(newMode) {
  currentMode = newMode;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function changeGridSize(value) {
  setCurrentSize(value);
  updateDimensions(value);
  reloadGrid();
}

function reloadGrid() {
  clearGrid();
  makeGrid(currentSize);
}

function clearGrid() {
  gridContainer.textContent = "";
}

function updateDimensions(value) {
  dimensions.textContent = `${value} x ${value}`;
}

function makeGrid(size) {
  gridContainer.style.setProperty("--grid-size", size);
  for (let j = 0; j < size ** 2; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);
    // Hover Effect
    gridSquare.addEventListener("mouseover", changeColor);
  }
}

function changeColor(e) {
  if (e.type === "mouseover" && click) return;
  if (currentMode === "rainbow") {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.background = "#" + randomColor;
  } else if (currentMode === "color") {
    e.target.style.background = currentColor;
  }
}
