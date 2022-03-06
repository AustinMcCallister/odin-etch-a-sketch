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