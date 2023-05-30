console.log('JS OK');


// Creo una variabile con scope globale che poi andro a stampare in console

let numberFizzBuzz = ''


// Preparo il ciclo
for (let i = 1; i <= 100; i++) {

    // Creo la condizione
    if (!(i % 5) && !(i % 3)) {
        numberFizzBuzz += ' FizzBuzz'
    } else if (!(i % 5)) {
        numberFizzBuzz += ' Buzz'
    } else if (!(i % 3)) {
        numberFizzBuzz += ' Fizz'
    } else {
        numberFizzBuzz += ' ' + i
    }
}

console.log(numberFizzBuzz);