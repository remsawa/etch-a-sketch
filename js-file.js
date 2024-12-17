
const container = document.querySelector('#container');

const sketchContainer = document.createElement('div');
sketchContainer.id = 'sketchContainer';


const btn = document.querySelector('#btn')

const sqCount = document.createElement('h2');
container.appendChild(sqCount);
sqCount.textContent = 'i';

function makeSq(sketchContainer) {
 
  let btnClicked =btn.addEventListener('click',(e) => {
    numOfSqs = 0;
    numOfSqs = prompt('How many squares?');
    if(numOfSqs) {
      console.log('hi);');
      makeSq(sketchContainer, numOfSqs);
    }
  });
  let numOfSqs = 256;
 

  for (let i = 1; i <= numOfSqs; i++) {
    const sq = document.createElement('div'); // Create a box
    sq.id = `sq${i}`; // Assign a unique ID
    sq.classList.add('sq'); // Add the class 'sq' for styling
    sketchContainer.appendChild(sq); // Append the box to the container
  }
}
makeSq(sketchContainer);


container.appendChild(sketchContainer);
//How about making a function to create all the squares once container is loaded?


//Drawing
sketchContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});


