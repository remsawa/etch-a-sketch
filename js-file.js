
const container = document.querySelector('#container');

const sketchContainer = document.createElement('div');
container.appendChild(sketchContainer);
sketchContainer.id = 'sketchContainer';

const btn = document.querySelector('#btn');
const sq = document.createElement('div'); // Create a box
sketchContainer.appendChild(sq);

const sqCount = document.createElement('h2');
container.appendChild(sqCount);

let  numOfSqs = 256;
function makeSq(sketchContainer) {
      for (let i = 1; i <= numOfSqs; i++) {
        const sq = document.createElement('div'); // Create a box
        sq.id = `sq${i}`; // Assign a unique ID
        sq.classList.add('sq'); // Add the class 'sq' for styling
        sketchContainer.appendChild(sq); // Append the box to the container
      }
      sqCount.textContent = `${numOfSqs}`;
}
makeSq(sketchContainer);

btn.addEventListener('click',(e) => {
  while (sketchContainer.firstChild) {
  sketchContainer.removeChild(sketchContainer.firstChild);
  }
  numOfSqs = prompt('How many squares?');

  console.log('Squares Cleared');
  if(numOfSqs <= 500) {
    for (let i = 1; i <= numOfSqs; i++) {
      const sq = document.createElement('div'); // Create a box
      sq.id = `sq${i}`; // Assign a unique ID
      sq.classList.add('sq'); // Add the class 'sq' for styling
      sketchContainer.appendChild(sq); // Append the box to the container
      sqCount.textContent = `${numOfSqs}`;
    }
  } else {
    alert('Pick a number between 1 and 500');
    for (let i = 1; i <= numOfSqs; i++) {
      const sq = document.createElement('div'); // Create a box
      sq.id = `sq${i}`; // Assign a unique ID
      sq.classList.add('sq'); // Add the class 'sq' for styling
      sketchContainer.appendChild(sq); // Append the box to the container
      sqCount.textContent = `${numOfSqs}`;
    }
  }
});

//Drawing
sketchContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});


