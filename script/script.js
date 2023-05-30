console.log('JS OK');

// Mi prendo l'elemento del DOM dove voglio inserire i dati

const blackboard = document.getElementById('blackboard');

// Creo una variabile con scope globale che poi andro a stampare in console

let numberFizzBuzz = ''


// Preparo il ciclo
for (let i = 1; i <= 100; i++) {

    // Creo la condizione
    if (!(i % 5) && !(i % 3)) {
        numberFizzBuzz += `<div class"col"><div class="card bg-blue text-white">FizzBuzz</div></div>`
    } else if (!(i % 5)) {
        numberFizzBuzz += `<div class"col"><div class="card bg-yellow">Buzz</div></div>`
    } else if (!(i % 3)) {
        numberFizzBuzz += `<div class"col"><div class="card bg-red">Fizz</div></div>`
    } else {
        numberFizzBuzz += `<div class"col"><div class="card bg-black text-white">${i}</div></div>`
    }
}

blackboard.innerHTML = numberFizzBuzz;

console.log(numberFizzBuzz);