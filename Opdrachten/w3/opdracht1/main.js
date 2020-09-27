// Get DOM elements
const inputName = document.getElementById('inputName');
const inputColor = document.getElementById('inputColor');
const headingResults = document.getElementById('results');
const headingVisitedResults = document.getElementById('resultsVisited');
const buttonSave = document.querySelector('button');
const bodyStyle = document.body.style;

// Get cookie values
let colorValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)color\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
);
let nameValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
);
let visitsCookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
);

// If cookies aren't empty, we set the background color
// This way it's set on page load instead of only on
// button click
if (document.cookie != 'name=; color=') {
    // Set placeholder and body background
    bodyStyle.backgroundColor = colorValue;
    inputName.placeholder = nameValue;
    inputColor.placeholder = colorValue;

    // Display name & page visits
    headingResults.innerHTML = `The name you stored is: ${nameValue}`;
    headingVisitedResults.innerHTML = `and you visited this page ${visitsCookie} times`;
} else {
    console.log('no cookies found!');
}

// Create cookies on button click
buttonSave.addEventListener('click', () => {
    let expires = genExpirationDate(7);

    // Set cookies with expiration date
    document.cookie = `name = ${inputName.value}; expires=${expires}]`;
    document.cookie = `color = ${inputColor.value}; expires=${expires}`;

    // Set background color and display name & page visits
    bodyStyle.backgroundColor = inputColor.value;
    headingResults.innerHTML = `The name you stored is: ${nameValue}`;
    headingVisitedResults.innerHTML = `and you visited this page ${visitsCookie} times`;
});

// Generate expiration date
function genExpirationDate(days) {
    var today = new Date();
    var nextweek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + days
    );
    return nextweek;
}

// Track page visits on refresh
var visits;
window.addEventListener('load', () => {
    if (visitsCookie == '' || visitsCookie == 'NaN') {
        visits = 0;
        document.cookie = `visits=${visits}`;
    } else if (parseInt(visitsCookie) >= 0) {
        visits = parseInt(visitsCookie);
        visits++;
        document.cookie = `visits=${visits}`;
    }
});
