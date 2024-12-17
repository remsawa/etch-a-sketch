
const container = document.querySelector('#container');

const sketchContainer = document.createElement('div');
sketchContainer.id = 'sketchContainer';


const btn = document.querySelector('#btn')

const sqCount = document.createElement('h2');
container.appendChild(sqCount);

let numOfSqs = 256;
function makeSq(sketchContainer) {
  btn.addEventListener('mousedown',(e) => {
    numOfSqs = 0;
    sqCount.textContent = `${numOfSqs}`;

  });

  if(down) {
    console.log('heyo');
  } else {
    startDefault();
  }

  btn.addEventListener('mouseup',(e) => {
    numOfSqs = prompt('How many squares?');
      console.log('hi);');
      makeSq(sketchContainer, numOfSqs);
      sqCount.textContent = `${numOfSqs}`;
  });

    function startDefault() {
      for (let i = 1; i <= numOfSqs; i++) {
        const sq = document.createElement('div'); // Create a box
        sq.id = `sq${i}`; // Assign a unique ID
        sq.classList.add('sq'); // Add the class 'sq' for styling
        sketchContainer.appendChild(sq); // Append the box to the container
      }
      sqCount.textContent = `${numOfSqs}`;
    }

}
makeSq(sketchContainer);


container.appendChild(sketchContainer);
//How about making a function to create all the squares once container is loaded?


//Drawing
sketchContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});


