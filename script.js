const colorScheme = ['#2E3440', '#3B4252', '#434C5E', '#4C566A',
                     '#D8DEE9', '#E5E9F0', '#ECEFF4', '#8FBCBB',
                     '#88C0D0', '#81A1C1', '#5E81AC', '#BF616A',
                     '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD'];

let gridSize = 16;

const body = document.querySelector('body');
body.setAttribute('ondragstart', 'return false;');

const sketchBody = document.querySelector('.sketch-body');
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const sketchSquare = document.createElement('div');
    const squareSize = (sketchBody.clientWidth / gridSize);
    sketchSquare.classList.add('sketch-square');
    sketchSquare.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px;`);
    sketchBody.appendChild(sketchSquare);
  }
}

const sketchGrid = document.querySelectorAll('.sketch-square');
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

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  sketchGrid.forEach((square) => {
    square.style.backgroundColor = colorScheme[6];
  });
});