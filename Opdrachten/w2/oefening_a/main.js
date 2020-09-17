var getal1 = Number(prompt('Enter a number'))
var getal2 = Number(prompt('Enter a second number'))

const maths = {
    sum: (a, b) => {
        return a + b;
    },
    average: (a, b) => {
        return (a + b) / 2
    }
}
document.querySelector('#getal1').innerHTML = getal1
document.querySelector('#getal2').innerHTML = getal2


var button = document.querySelector('button')
console.log(button)
button.addEventListener('click', () => {
console.log(Number(getal1));
document.querySelector('#sum').innerHTML = maths.sum(getal1, getal2)
document.querySelector('#average').innerHTML = maths.average(getal1, getal2)
    
})
