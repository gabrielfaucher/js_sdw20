// Get name and color from form and store in a cookie

// Get input from form
const inputName = document.getElementById('inputName');
const inputColor = document.getElementById('inputColor');
const buttonSave = document.getElementById('buttonSave');
const container = document.getElementById('container');
const elementVisited = document.getElementById('visited');

// Split cookies up into a usable format
let cookies = {};
{
  const cookiesCurrent = document.cookie.split(';');
  for (const prop of cookiesCurrent) {
    console.log(prop);
    cookies[prop.split('=')[0].trim()] = prop.split('=')[1].trim();
  }
}
elementVisited.innerHTML = `Aantal keren dat de pagina is bezocht: ${cookies.visited}`;
// Store input in a cookie on button click
// Cookie is valid for 1 week

// Get date one week from now
var today = new Date();
var nextweek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
);

// Store input in a cookie on button click
// Set validation for cookie
// Change background color based on input
let visited;
buttonSave.addEventListener('click', () => {
  if (visited == undefined || visited == null) visited = 0;
  document.cookie = `name = ${inputName.value}; expires=${nextweek}}`;
  document.cookie = `color = ${inputColor.value}; expires=${nextweek}`;
  visited++;
  console.log(visited);
  document.cookie = `visited = ${visited}`;
  elementVisited.innerHTML = `Aantal keren dat de pagina is bezocht: ${cookies.visited}`;
  console.log(cookies.visited);
});
