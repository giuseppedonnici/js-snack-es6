/*
Snack Bonus
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
es: 
const numbersArray = [23, 14, 6, 8, 10];
const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]
*/

const numbersArray = [23, 14, 6, 8, 10, 7, 12, 25, 69, 77, 87];

const min = 2;
const max = 5;

const newArray = getSubArray(numbersArray, min, max);
console.log(newArray);


// FUNCTIONS
function getSubArray(arrayToCheck, minIndex, maxIndex) {
    return arrayToCheck.filter((elem, index) => index >= minIndex && index <= maxIndex);
}

