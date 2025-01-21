
const container = document.querySelector('#container');
const sketchContainer = document.querySelector('#sketchContainer');
//const sq = document.createElement('div'); // Create a box
const squares = sketchContainer.querySelectorAll('.sq');


//sketchContainer.appendChild(sq);

//const defaultSqs = 256;

const slider = document.querySelector('.slider');
const sliderValue = slider.value;

const output = document.querySelector('.output');
output.textContent = `${slider.value}`;
slider.parentElement.appendChild(output);

//slider value
slider.addEventListener('input', () => {
  output.textContent = `${slider.value}`;
});

console.log(output.textContent);

 const defaultSqs = 260;
 let numberOfSqs = output.textContent;

function makeSq(sketchContainer) {
  for (let i = 1; i <= defaultSqs; i++) {
    const sq = document.createElement('div'); // Create a box
    sq.id = `sq${i}`; // Assign a unique ID
    sq.classList.add('sq'); // Add the class 'sq' for styling
    sq.style.opacity = 0.5;
    sketchContainer.appendChild(sq); // Append the box to the container
  }
}
makeSq(sketchContainer);

/*sketchContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('sq')) {
    let currentOpacity = parseFloat(e.target.style.opacity);
    if (currentOpacity < 1) {
      e.target.style.opacity = currentOpacity + 0.5;
    }
  }
});*/

sketchContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('sq')) {
    let currentOpacity = parseFloat(e.target.style.opacity);
    if (currentOpacity < 1) {
      e.target.style.opacity = currentOpacity + 0.1;
    }
  }
});

const resetBtn = document.querySelector('#resetBtn');
const lineBtn = document.querySelector('#lineBtn')


resetBtn.addEventListener('click', () => {
  const squares = sketchContainer.querySelectorAll('.sq');
  
  //Reset the opacity of each square
  squares.forEach((square) => {
    square.style.opacity = 0.5; 
});


function clearSqs(sketchContainer) {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.firstChild);
  }
}