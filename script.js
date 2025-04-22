// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Domande da  farsi quando si crea una funzione:
// 1. Come dovrebbe chiamarsi?
// 2. Ho bisogno di parametri?
// 3. Devo restituire un valore?
// 4. Se sì, di che tipo?






// Pari e Dispari

// chiedo all'utente di inserire pari/dispari e di scegliere un numero da 1 a 5
const userChoice = prompt("Scegli e scrivi : pari o dispari?");
const userNumberChoiceStr = prompt("Scegli e scrivi un numero da 1 a 5");
const userNumberChoice = parseInt(userNumberChoiceStr);
console.log(userNumberChoice);

// salvo la scelta dell'utente in una variabile


// Creo la funzione che genera il numero per il computer
function computerNumber() {

    let rndNumber = Math.floor(Math.random() * 5) + 1 ;
    return rndNumber;
    

}


// richiamo la funzione
computerNumber();

// salvo il numero generato in una variabile

const compNumber = computerNumber();
console.log(compNumber);
// definisco la somma
let sum = userNumberChoice + compNumber;
console.log(sum);

//  controllo se la somma è pari o dispari
function isEven(sum) {

const even = sum % 2 === 0;

   
    if (even) {
        return true;
    }

    else {
        return false;
    }
    


}

// richiamo la funzione di controllo sulla somma
isEven(sum);
// stampo il risultato del check

if (isEven(sum) && userChoice === "pari") {
    console.log("la somma è pari e hai vinto");
} else if (isEven(sum) === false && userChoice === "dispari") {
    console.log("la somma è dispari e hai vinto");
} else {
    {
        console.log("hai perso");
    }
}









