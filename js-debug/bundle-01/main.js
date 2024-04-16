/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// Non sono presenti errori di sintassi, ma il ciclo non può partire perchè i=0 non è maggiore di 5
// Quindi per farlo funzionare correttamente (o almeno per farlo partire) possdiamo modificare la condizione i > 5 con i < 5
// una volta corretto Il codice dovrebbe stampare i numeri da 0 a 5

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// l'errore è che viene utilizzato = invece di ===
// probabilmente manca anche un else ma il codice sembra funzionarmi anche senza l'insermento dell'else (errore di sintassi?)
// Il codice corretto aggiungere 5 a un numero se il numero è pari, altrimenti restituisce il numero dispari originario.


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]