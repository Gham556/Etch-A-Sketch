
const container = document.querySelector('div.container');


for(i=0; i < 256; i++) {
const square = document.createElement('div');
document.createAttribute('square');
square.classList.add('square');
container.appendChild(square);
square.addEventListener('onHover', mouseDraw)

}


function mouseDraw() {
    this.setAttribute('style', 'background-color:white;')
}