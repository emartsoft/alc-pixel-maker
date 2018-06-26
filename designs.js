// Select color input
// Select size input

let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");
let canvas = document.getElementById("pixelCanvas");
let height = document.getElementById("inputHeight");
let weight = document.getElementById("inputWeight");

color.addEventListener("click", function () {});

// Function to create the grid
function makeGrid() {
    for (let x = 0; x < height.value; x++) {
        const row = canvas.insertRow(x);
        for (let y = 0; y < weight.value; y++) {
            const cell = row.insertCell(y);
            cell.addEventListener("click", fillSquare);
        }
    }
}

// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function (event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};

// Clear the grid
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

// Function to apply the styling color to the grid
function fillSquare() {
    this.setAttribute("style", `background-color: ${color.value}`);
}