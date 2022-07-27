
const container = document.querySelector('div.container');


for(i=0; i < 256; i++) {
const square = document.createElement('div');
//document.createAttribute('square');
square.classList.add('square');
container.appendChild(square);
square.addEventListener('mouseover', mouseDraw)


function generateGrid() {
//removes existing grid 
    const myDiv = document.getElementById('main');
   myDiv.innerHTML = "";

  const gridSize = prompt("Choose Your Grid Size With A Single Number Below 100")
 
  const squareSize = (896 / gridSize) - 6 / 2;  
  console.group(squareSize);
  
  
  for (let i = 0; i < gridSize * gridSize; i++){
    const square = document.createElement('div');
    document.createAttribute('square');
    square.classList.add('square');
    const squareStyle = document.querySelector('div').style
   squareStyle.padding = squareSize,'px';
    container.appendChild(square);
    square.addEventListener('mouseover', mouseDraw)
  } 

}
}

function mouseDraw() {
    this.setAttribute('style', 'background-color:white;')
}

const resetButton = document.querySelector('button');

resetButton.addEventListener('click', generateGrid)

function generateGrid(square, container) {
    console.log(square)
    for(square in container)
    container.removeChild('square')
}