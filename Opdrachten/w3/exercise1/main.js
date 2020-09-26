// Get input from form
const inputName = document.getElementById('inputName');
const inputColor = document.getElementById('inputColor');
const buttonSave = document.getElementById('buttonSave');
const container = document.getElementById('container');
const elementVisited = document.getElementById('visited');

buttonSave.addEventListener('click', () => {
  // Get expiration date (one week from now)
  var today = new Date();
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );

  // Set cookies for name & color
  document.cookie = `name = ${inputName.value}; expires=${nextweek}}`;
  document.cookie = `color = ${inputColor.value}; expires=${nextweek}`;
});

// Split cookies up into a usable format
let cookies = {};
if (document.cookie != '') {
  const cookiesCurrent = document.cookie.split(';');
  for (const prop of cookiesCurrent) {
    cookies[prop.split('=')[0].trim()] = prop.split('=')[1].trim();
  }
} else {
  elementVisited.innerHTML =
    'No cookies are stored at the moment! Try making one with the form above';
}

function countLoad() {
  let visited;
  if (visited >= 0) {
    visited++;
    document.cookie = `visited = ${visited}`;
  } else {
  }
  visited = 0;
  document.cookie = `visited = ${visited};`;
}

window.onload = countLoad;
