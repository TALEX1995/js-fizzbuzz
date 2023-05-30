# Traccia

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

## Bonus 1

Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche (template literals, innerHTML, append, ecc)

## Bonus 2

Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi usare varie tecniche (style , className, classList)

---

<br>
<br>
<br>
<br>

# Steps

1. Preparo una variabile con scope globale che lascero vuota su cui poi andrò a fare il console.log
1. Creo un ciclo che vada da 1 a 100 con i++
   - Creo un **SE** andando a vedere se il numero di i non da resto ne diviso 5 ne diviso 3 allora andrò a sommare alla variabile FizzBuzz
   - **ALTRIMENTI SE** il numero della i non da resto diviso 5 andro a sommare alla variabile Buzz
   - **ALTRIMENTI SE** il numero della i non da resto diviso 3 andro a sommare alla variabile Fizz.
   - **ALTRIMENTI** andro a sommare la variabile con il numero della i.
1. Faccio il console.log della variabile preparata precedentemente.
