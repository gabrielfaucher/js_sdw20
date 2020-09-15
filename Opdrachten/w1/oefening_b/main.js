// Declare global variables
var name = 'jan';
var y = 200;
var z = 5;
var operand_1;
var operand_2;

// Declare math object with methods for each mathematical operation
const maths = {
    add: (a, b) => {
        operand_1 = a;
        operand_2 = b;
        return a + b;
    },
    subtract: (a, b) => {
        operand_1 = a;
        operand_2 = b;
        return a - b;
    },
    multiply: (a, b) => {
        operand_1 = a;
        operand_2 = b;
        return a * b;
    },
    divide: (a, b) => {
        operand_1 = a;
        operand_2 = b;
        return a / b;
    },
    exponentiate: (a, b) => {
        operand_1 = a;
        operand_2 = b;
        return a ^ b;
    },
    modulo: (a, b) => {
        operand_1 = a;
        operand_2 = b;
        return a % b;
    }
}

// Set HTML content for calculation & result of addition
document.querySelector('#add_res').innerHTML = `resultaat: ${maths.add(y, z)}`
document.querySelector('#add_calc').innerHTML = `Berekening: ${operand_1} + ${operand_2}`

// Set HTML content for calculation & result of subtraction
document.querySelector('#sub_res').innerHTML = `resultaat: ${maths.subtract(y, z)}`
document.querySelector('#sub_calc').innerHTML = `Berekening: ${operand_1} + ${operand_2}`

// Set HTML content for calculation & result of multiplication
document.querySelector('#mult_res').innerHTML =`resultaat: ${maths.multiply(y, z)}`
document.querySelector('#mult_calc').innerHTML = `Berekening: ${operand_1} + ${operand_2}`

// Set HTML content for calculation & result of division
document.querySelector('#div_res').innerHTML = `resultaat: ${maths.divide(y, z)}`
document.querySelector('#div_calc').innerHTML = `Berekening: ${operand_1} + ${operand_2}`

// Set HTML content for calculation & result of exponentiation
document.querySelector('#exp_res').innerHTML = `resultaat: ${maths.exponentiate(y, z)}`
document.querySelector('#exp_calc').innerHTML = `Berekening: ${operand_1} + ${operand_2}`

// Set HTML content for calculation & result of modulo
document.querySelector('#mod_res').innerHTML = `resultaat: ${maths.modulo(y, z)}`
document.querySelector('#mod_calc').innerHTML = `Berekening: ${operand_1} + ${operand_2}`

// Display name variable in HTML
document.getElementById('#var_name').innerHTML = name;
