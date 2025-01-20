
const container = document.querySelector('#container');
const sketchContainer = document.querySelector('#sketchContainer');
//const sq = document.createElement('div'); // Create a box

//sketchContainer.appendChild(sq);

//const defaultSqs = 256;

//let  numOfSqs = 256;
//const sqCount = document.createElement('h2');
//container.appendChild(sqCount);


function makeSq(sketchContainer) {
  for (let i = 1; i <= 260; i++) {
    const sq = document.createElement('div'); // Create a box
    sq.id = `sq${i}`; // Assign a unique ID
    sq.classList.add('sq'); // Add the class 'sq' for styling
    sketchContainer.appendChild(sq); // Append the box to the container
  }
  sqCount.textContent = `${numOfSqs}`;
}
makeSq(sketchContainer);

const resetBtn = document.querySelector('#resetBtn');


const slider = document.querySelector('#slidecontainer');






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

//Drawing

sketchContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});

