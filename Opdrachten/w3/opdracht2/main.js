// Get DOM elements
const inputName = document.getElementById('inputName');
const inputColor = document.getElementById('inputColor');
const headingResults = document.getElementById('results');
const buttonSave = document.querySelector('button');

// Callback on form save
buttonSave.addEventListener('click', () => {
    // Store input in localStorage
    localStorage.name = inputName.value;
    localStorage.color = inputColor.value;

    // Set background color to localStorage
    document.body.style.backgroundColor = localStorage.color;
});

// Track page visits on refresh
window.addEventListener('load', () => {
    if (localStorage.visits == undefined) {
        console.log('visits is not defined');
        localStorage.visits = 0;
    } else {
        localStorage.visits++;
    }
});

// Display results
headingResults.innerHTML = `Opgeslagen naam is: ${localStorage.name} en de pagina is ${localStorage.visits} keer bezocht`;

// Set background color to localStorage value
document.body.style.backgroundColor = localStorage.color;

// Set input placeholder to values in localStorage
inputColor.placeholder = localStorage.color;
inputName.placeholder = localStorage.name;
