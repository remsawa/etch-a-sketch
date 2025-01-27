
const container = document.querySelector('#container');
const sketchContainer = document.querySelector('#sketchContainer');
//const sq = document.createElement('div'); // Create a box
const squares = sketchContainer.querySelectorAll('.sq');


//sketchContainer.appendChild(sq);

//const defaultSqs = 256;

const slider = document.querySelector('.slider');
let sliderValue = slider.value;

const output = document.querySelector('.output');
output.textContent = `${slider.value}`;
slider.parentElement.appendChild(output);

//slider value
slider.addEventListener('mouseup', () => {
    output.textContent = `${slider.value}`;
    //Trying to create ticks
    if (output.textContent <= 95) {
      slider.value = 64;
      output.textContent = 64;
    } else if (output.textContent > 95 &&  output.textContent < 145) {
      slider.value = 100;
      output.textContent = 100;
    } else if (output.textContent > 145 && output.textContent < 225) {
      slider.value = 144;
      output.textContent = 144;
    } else if (output.textContent > 225 && output.textContent < 290) {
      slider.value = 196;
      output.textContent = 196;
    } else if (output.textContent > 290 && output.textContent < 355) {
      slider.value = 256;
      output.textContent = 256; 
    } else if (output.textContent > 355 && output.textContent < 350) {
        slider.value = 324;
        output.textContent = 324;
    } else if (output.textContent > 350 && output.textContent < 380) {
      slider.value = 361;
      output.textContent = 361;
    } else if (output.textContent > 380) {
      slider.value = 400;
      output.textContent = 400;
    }
    while(sketchContainer.firstChild) {
      sketchContainer.removeChild(sketchContainer.firstChild);
    }
    makeSq(sketchContainer);
  
});
slider.addEventListener('mousedown', () => { 
   //if (confirm("If you change the number of square your current work will be clear")){
    output.textContent = `${slider.value}`;
   //}
});

const resetBtn = document.querySelector('#resetBtn');
const lineBtn = document.querySelector('#lineBtn')


resetBtn.addEventListener('click', () => {
  const squares = sketchContainer.querySelectorAll('.sq');
  
  //Reset the opacity of each square
  squares.forEach((square) => {
    square.style.opacity = 0.2; 
  });
});

let defaultSqs = 256;
let numberOfSqs = output.textContent;

function makeSq(sketchContainer) {
  const totalSquares = slider.value;
  const squaresPerRow = Math.sqrt(totalSquares);//Math.ceil always rounds up and returns the smallest integer greater than or equal to a given number.
  const squareSize = (784/ squaresPerRow);//800px sketchContainer. Math.floor always rounds down and returns the largest integer less than or equal to a given number.
  

  for (let i = 1; i <= totalSquares; i++) {
    const sq = document.createElement('div');
    sq.id = `sq${i}`; //Give each sq an id
    sq.classList.add('sq'); //Each sq has sq class
    sq.style.width = `${squareSize}px`;
    sq.style.height = `${squareSize}px`;
    sq.style.opacity = 0.2;
    sq.style.boxSizing = 'border-box';
    sketchContainer.appendChild(sq);
  }
}
makeSq(sketchContainer);

//Drawing
sketchContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('sq')) {
    let currentOpacity = parseFloat(e.target.style.opacity);
    if (currentOpacity < 1) {
      e.target.style.opacity = currentOpacity + 0.2;
    }
  }
});

//Erasing
sketchContainer.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('sq')) {
    let currentOpacity = parseFloat(e.target.style.opacity);
    if(currentOpacity > 0.2){
        e.target.style.opacity = currentOpacity - 0.2;
    }
  }
});