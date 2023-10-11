const gridSizeInput = document.getElementById('vol');
let gridSize = gridSizeInput.value;
let labelText = document.querySelector('label').innerHTML = `Grid size: ${gridSize} x ${gridSize}`;
const gridContainer = document.querySelector('.js-container');
let newGridSize;

document.addEventListener('DOMContentLoaded', () => {
  createGrid();
})

document.querySelector('.js-clear-button').addEventListener('click', () => {
  const cells = document.querySelectorAll('.js-cell');
  cells.forEach((cell) => {
    cell.classList.remove('black');
  })
})

document.querySelector('.js-apply-button').addEventListener('click', () => {
  if (gridSize !== newGridSize) {
    gridSize = newGridSize;

    while(gridContainer.lastChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    
    createGrid();
  }
})

gridSizeInput.addEventListener('input', () => {
  newGridSize = gridSizeInput.value;
  labelText = document.querySelector('label').innerHTML = `Grid size: ${newGridSize} x ${newGridSize}`;
})

function drawPaintingOnHold() {
  let isPainting = false;
  const cells = document.querySelectorAll('.js-cell');
  cells.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
      isPainting = true;
      cell.classList.add('black');
    })

    document.body.addEventListener('mouseup', () => {
      isPainting = false;
    })

    cell.addEventListener('mouseover', () => {
      if(isPainting) {
        cell.classList.add('black');
      }
    })
  })
}

function createGrid() {
  for(let ir = 1; ir <= gridSize; ir++) {
    createRow();
  }
  drawPaintingOnHold();
}

function createRow () {
  const rowContainer = document.createElement('div');
  rowContainer.classList.add(`row-container`);
  gridContainer.appendChild(rowContainer);

  for (let ic = 1; ic <= gridSize; ic++) {
    const div = document.createElement('div');
    div.classList.add('cell', 'js-cell');
    rowContainer.appendChild(div);

  }
}