// Get DOM elements
const inputName = document.getElementById('inputName');
const inputColor = document.getElementById('inputColor');
const headingResults = document.getElementById('results');
const buttonSave = document.querySelector('button');
const bodyStyle = document.body.style;

// If cookies aren't empty, we set the background color
// This way it's set on page load instead of only on
// button click
if (document.cookie != 'name=; color=') {
    let colorValue = document.cookie.replace(
        /(?:(?:^|.*;\s*)color\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
    );
    let nameValue = document.cookie.replace(
        /(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
    );

    // Set placeholder and body background
    bodyStyle.backgroundColor = colorValue;
    inputName.placeholder = nameValue;
    inputColor.placeholder = colorValue;
    results.innerHTML = `The name you stored is: ${nameValue}`;
} else {
    console.log('no cookies found!');
}

// Create cookies on button click
buttonSave.addEventListener('click', () => {
    let expires = genExpirationDate(7);
    document.cookie = `name = ${inputName.value}; expires=${expires}]`;
    document.cookie = `color = ${inputColor.value}; expires=${expires}`;

    bodyStyle.backgroundColor = inputColor.value;
    results.innerHTML = `The name you stored is: ${nameValue}`;
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

// Save & track page visits
function trackVisits() {
    let visitsAmount = document.cookie.replace(
        /(?:(?:^|.*;\s*)visits\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
    );
    console.log(visitsAmount);
    var visits;
    if (
        (typeof visitsAmount == '' && visitsAmount != 0) ||
        visitsAmount == undefined
    ) {
        visits = 0;
        console.log('visitsAmount is nothing');
        console.log(visits);
        document.cookie = `visits = ${visits};`;
    } else {
        console.log('visitsAmount exists!');
        // visits++;
        console.log(visits);
        document.cookie = `visits = ${visits};`;
    }
}

window.addEventListener('load', trackVisits);
