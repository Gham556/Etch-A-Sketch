
const container = document.querySelector('div.container');


for(i=0; i < 256; i++) {
const square = document.createElement('div');
document.createAttribute('square');
square.classList.add('square');
container.appendChild(square);
square.addEventListener('mouseover', mouseDraw)


function generateGrid() {
    console.log(square)
    container.removeChild(square)
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