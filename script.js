const colorScheme = ['#2E3440', '#3B4252', '#434C5E', '#4C566A',
                     '#D8DEE9', '#E5E9F0', '#ECEFF4', '#8FBCBB',
                     '#88C0D0', '#81A1C1', '#5E81AC', '#BF616A',
                     '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD'];

let gridSize = 16;
drawGrid(gridSize);
addGridEvents();

const body = document.querySelector('body');
body.setAttribute('ondragstart', 'return false;');

function drawGrid(gridSize) {
  const sketchBody = document.querySelector('.sketch-body');
  let docFragment = document.createDocumentFragment();
  sketchBody.setAttribute('style', `grid-template-rows: repeat(${gridSize}, 1fr);`);
  sketchBody.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr);`);
  for (let i = 0; i < gridSize ** 2; i++) {
    const sketchSquare = document.createElement('div');
    const squareSize = (sketchBody.clientWidth / gridSize);
    sketchSquare.classList.add('sketch-square');
    sketchSquare.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px;`);
    docFragment.appendChild(sketchSquare);
  }
  sketchBody.appendChild(docFragment);
}

function resetFunction() {
  const sketchGrid = document.querySelectorAll('.sketch-square');
  sketchGrid.forEach((square) => {
    square.style.backgroundColor = colorScheme[6];
  });
}

function deleteGrid() {
  const gridSquares = document.getElementsByClassName('sketch-square');
  const resetButton = document.querySelector('#reset');
  resetButton.removeEventListener('click', resetFunction);
  while(gridSquares.length > 0) {
    gridSquares[0].parentNode.removeChild(gridSquares[0]);
  }

}

function addGridEvents() {
  const sketchGrid = document.querySelectorAll('.sketch-square');
  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', resetFunction);
  sketchGrid.forEach((square) => {
    square.addEventListener('mouseover', (event) => {
      if (event.buttons === 1) {
        event.target.style.backgroundColor = colorScheme[0];
      }
    });
    square.addEventListener('mousedown', (event) => {
      event.target.style.backgroundColor = colorScheme[0];
    });
  });
}

let slider = document.getElementById("grid-range");
let output = document.getElementById("grid-value");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
}

slider.onchange = function () {
  gridSize = this.value;
  deleteGrid();
  drawGrid(gridSize);
  addGridEvents();
}
