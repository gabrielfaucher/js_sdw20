var numbers = [];
const heading = document.querySelector('#table')
const results = document.querySelector('#results')

function calcTable(table) {
    heading.innerHTML = `De tafel van ${table}` 

    // Populate the array with the numbers we need to caculate the table
    for (var i = 0; i <= table; i++) {
       numbers.push(i) 
    }

    // Create a p element for each calculation and show the results
    for (var i = 1; i < numbers.length ; i++) {
        let p = document.createElement('p')
        p.innerHTML = `${i} x ${table} = ${i*table}`
        results.appendChild(p)

    }
}

calcTable(prompt('Please provide a number:', '5'))
