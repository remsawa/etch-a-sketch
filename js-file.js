
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
    slider.value = 65;
    output.textContent = 65;
  } else if (output.textContent > 95 &&  output.textContent < 145) {
    slider.value = 130;
    output.textContent = 130;
  } else if (output.textContent > 145 && output.textContent < 225) {
    slider.value = 195;
    output.textContent = 195;
  } else if (output.textContent > 225 && output.textContent < 290) {
    slider.value = 260;
    output.textContent = 260;
  } else if (output.textContent > 290 && output.textContent < 355) {
    slider.value = 325;
    output.textContent = 325; 
  } else if (output.textContent > 355 && output.textContent < 420) {
      slider.value = 390;
      output.textContent = 390;
  } else if (output.textContent > 420) {
    slider.value = 455;
    output.textContent = 455;
  }
});
slider.addEventListener('mousedown', () => {
  output.textContent = `${slider.value}`;
});

let tickPoints = [65, 130, 195, 260, 325, 390, 455];


let defaultSqs = 260;
let numberOfSqs = output.textContent;

function makeSq(sketchContainer) {
  for (let i = 1; i <= defaultSqs; i++) {
    const sq = document.createElement('div'); // Create a box
    sq.id = `sq${i}`; // Assign a unique ID
    sq.classList.add('sq'); // Add the class 'sq' for styling
    sq.style.opacity = 0.2;
    sketchContainer.appendChild(sq); // Append the box to the container
  }
}
makeSq(sketchContainer);

sketchContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('sq')) {
    let currentOpacity = parseFloat(e.target.style.opacity);
    if (currentOpacity < 1) {
      e.target.style.opacity = currentOpacity + 0.2;
    }
  }
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


function clearSqs(sketchContainer) {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
}