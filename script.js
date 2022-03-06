const colorScheme = ['#2E3440', '#3B4252', '#434C5E', '#4C566A',
                     '#ECEFF4', '#E5E9F0', '#D8DEE9', '#8FBCBB',
                     '#88C0D0', '#81A1C1', '#5E81AC', '#BF616A',
                     '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD'];

const sketchBody = document.querySelector('.sketch-body');
let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const sketchSquare = document.createElement('div');
    const squareSize = (sketchBody.clientWidth / gridSize);
    sketchSquare.classList.add('sketch-square');
    sketchSquare.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px;`);
    sketchBody.appendChild(sketchSquare);
  }
}