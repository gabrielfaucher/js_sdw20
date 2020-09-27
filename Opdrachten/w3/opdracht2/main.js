// Get DOM elements
const inputName = document.getElementById('inputName');
const inputColor = document.getElementById('inputColor');
const headingResults = document.getElementById('results');
const buttonSave = document.querySelector('button');

buttonSave.addEventListener('click', () => {
    document.cookie = `name = ${inputName.value};`;
    document.cookie = `color = ${inputColor.value};`;
    console.log(document.cookie);
});
