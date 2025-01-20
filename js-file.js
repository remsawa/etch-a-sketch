
const container = document.querySelector('#container');
const sketchContainer = document.querySelector('#sketchContainer');
//const sq = document.createElement('div'); // Create a box

//sketchContainer.appendChild(sq);

//const defaultSqs = 256;

//let  numOfSqs = 256;
//const sqCount = document.createElement('h2');
//container.appendChild(sqCount);

const slider = document.querySelector('.slider');
const sliderValue = slider.value;

//sliderValue.innerHTML = slider.aria

if (sliderValue == 260) {
  console.log('true');
} else {
  console.log(sliderValue);
}


function makeSq(sketchContainer) {
  for (let i = 1; i <= 260; i++) {
    const sq = document.createElement('div'); // Create a box
    sq.id = `sq${i}`; // Assign a unique ID
    sq.classList.add('sq'); // Add the class 'sq' for styling
    sq.style.opacity = 0.5;
    sketchContainer.appendChild(sq); // Append the box to the container
  }
  //sqCount.textContent = `${numOfSqs}`;
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

/*
sketchContainer.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('sq')) {
    let currentOpacity = parseFloat(e.target.style.opacity);
    if (currentOpacity < 1) {
      e.target.style.opacity = currentOpacity - 0.1;
    }
  }
});*/

const resetBtn = document.querySelector('#resetBtn');
const lineBtn = document.querySelector('#lineBtn')


//lineBtn.addEventListener('click',(e) => {



resetBtn.addEventListener('click',(e) => {
  numOfSqs = prompt('How many squares?');

  if(numOfSqs <= 500) {
     //Clearing number of squares on click
     if (numOfSqs > 0) {
      while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
      } 
    } else if (numOfSqs <= 0) {
        alert('Pick a number between 1 and 500');
    }
    console.log('Squares Cleared');
    //Make squares
    for (let i = 1; i <= numOfSqs; i++) {
      const sq = document.createElement('div'); // Create a box
      sq.id = `sq${i}`; // Assign a unique ID
      sq.classList.add('sq'); // Add the class 'sq' for styling
      sketchContainer.appendChild(sq); // Append the box to the container
      sqCount.textContent = `${numOfSqs}`;
    }
  } else if (numOfSqs > 500 || numOfSqs == 0) {
    while (numOfSqs > 500 || numOfSqs == 0) {
      alert('Pick a number between 1 and 500');
      numOfSqs = prompt('How many squares?');
    }
      if(numOfSqs <= 500) {
        for (let i = 1; i <= numOfSqs; i++) {
          const sq = document.createElement('div'); // Create a box
          sq.id = `sq${i}`; // Assign a unique ID
          sq.classList.add('sq'); // Add the class 'sq' for styling
          sketchContainer.appendChild(sq); // Append the box to the container
          sqCount.textContent = `${numOfSqs}`;
        }
      }
    }
});
