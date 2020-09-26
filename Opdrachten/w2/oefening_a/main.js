// Select button
var button = document.querySelector('button');

// Get numers via prompt input
var getal1 = Number(prompt('Enter a number'));
var getal2 = Number(prompt('Enter a second number'));

// Object holding methods for mathematical operations
const maths = {
  sum: (a, b) => {
    return a + b;
  },
  average: (a, b) => {
    return (a + b) / 2;
  },
};

// Operate on the numbers provided and add the results to
// the right elements on button click
button.addEventListener('click', () => {
  document.querySelector('#sum').innerHTML = maths.sum(getal1, getal2);
  document.querySelector('#average').innerHTML = maths.average(getal1, getal2);
});

// Display the base numbers
document.querySelector('#getal1').innerHTML = getal1;
document.querySelector('#getal2').innerHTML = getal2;
