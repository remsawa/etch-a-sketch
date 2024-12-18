
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
 

  /*btn.addEventListener('mouseup',(e) => {
    numOfSqs = prompt('How many squares?');
      console.log('hi);');
      makeSq(sketchContainer, numOfSqs);
      sqCount.textContent = `${numOfSqs}`;
  });*/

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
  
  for (let i = 1; i <= numOfSqs; i++) {
    const sq = document.createElement('div'); // Create a box
    sq.id = `sq${i}`; // Assign a unique ID
    sq.classList.add('sq'); // Add the class 'sq' for styling
    sketchContainer.appendChild(sq); // Append the box to the container
  }
  sqCount.textContent = `${numOfSqs}`;

});


/*btn.addEventListener('click',(e) => {
  sketchContainer.removeChild(sq);
  function makeNewNum () {
    numOfSqs = prompt('How many squares?');
    console.log('clicked');
    for (let i = 1; i <= numOfSqs; i++) {
      const sq = document.createElement('div'); // Create a box
      sq.id = `sq${i}`; // Assign a unique ID
      sq.classList.add('sq'); // Add the class 'sq' for styling
      sketchContainer.appendChild(sq); // Append the box to the container
    }
    sqCount.textContent = `${numOfSqs}`;

  }
    makeNewNum(sketchContainer, numOfSqs);
    sqCount.textContent = `${numOfSqs}`;
});*/



//Drawing
sketchContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});


