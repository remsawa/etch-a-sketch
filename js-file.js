
const container = document.querySelector('#container');

const sketchContainer = document.createElement('div');
sketchContainer.id = 'sketchContainer';

const sq1L1 = document.createElement('div');
sq1L1.id = 'sq1L1';
sq1L1.classList = 'sq';

const sq1L2 = document.createElement('div');
sq1L2.id = 'sq1L2';
sq1L2.classList = 'sq';

const sq1L3 = document.createElement('div');
sq1L3.id = 'sq1L3';
sq1L3.classList = 'sq';

const sq1L4 = document.createElement('div');
sq1L4.id = 'sq1L4';
sq1L4.classList = 'sq';

const sq1L5 = document.createElement('div');
sq1L5.id = 'sq1L5';
sq1L5.classList = 'sq';

const sq1L6 = document.createElement('div');
sq1L6.id = 'sq1L6';
sq1L6.classList = 'sq';

const sq1L7 = document.createElement('div');
sq1L7.id = 'sq1L7';
sq1L7.classList = 'sq';

const sq1L8 = document.createElement('div');
sq1L8.id = 'sq1L8';
sq1L8.classList = 'sq';

const sq1L9 = document.createElement('div');
sq1L9.id = 'sq1L9';
sq1L9.classList = 'sq';

const sq1L10 = document.createElement('div');
sq1L10.id = 'sq1L10';
sq1L10.classList = 'sq';

function makeSq(sketchContainer, numberOfBoxes) {
  for (let i = 1; i <= numberOfBoxes; i++) {
    const sq = document.createElement('div'); // Create a box
    sq.id = `sq${i}`; // Assign a unique ID
    sq.classList.add('sq'); // Add the class 'sq' for styling
    sketchContainer.appendChild(sq); // Append the box to the container
  }
}
makeSq(sketchContainer, 256);

container.appendChild(sketchContainer);//container.appendChild(square);
/*container.appendChild(sq1L1);
container.appendChild(sq1L2);
container.appendChild(sq1L3);
container.appendChild(sq1L4);
container.appendChild(sq1L5);
container.appendChild(sq1L6);
container.appendChild(sq1L7);
container.appendChild(sq1L8);
container.appendChild(sq1L9);
container.appendChild(sq1L10);
*/
//How about making a function to create all the squares once container is loaded?


//Drawing
sketchContainer.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'black';
});