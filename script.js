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



// FUNZIONI

// Funzione per controllare se una parola è palindroma
function isPalindrome(userWord) {
    let reverseWord = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + userWord[i];
    }
    if (reverseWord === userWord) {
        console.log("la parola è palindroma");
    } else {
        console.log("la parola NON è palindroma");
    }
}

// Funzione per controllare input pari/dispari
function wordCheck(userChoice) {
   while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt("Scegli e scrivi : pari o dispari?");
   }
}

// Funzione per generare numero random per il computer
function computerNumber() {
    let rndNumber = Math.floor(Math.random() * 5) + 1;
    return rndNumber;
}

// Funzione per controllare se un numero è pari
function isEven(sum) {
    return sum % 2 === 0;
}

// Funzione per determinare il vincitore
function whoWins() {
    if (isEven(sum) && userChoice === "pari") {
        console.log("la somma è pari e hai vinto");
    } else if (isEven(sum) === false && userChoice === "dispari") {
        console.log("la somma è dispari e hai vinto");
    } else {
        console.log("hai perso");
    }
}

// ESECUZIONE PALINDROME
let userWord = prompt("Scrivi una parola");
console.log(userWord);
isPalindrome(userWord);

// ESECUZIONE PARI E DISPARI
const userChoice = prompt("Scegli e scrivi : pari o dispari?");
console.log(userChoice);
wordCheck(userChoice);

const userNumberChoiceStr = prompt("Scegli e scrivi un numero da 1 a 5");
const userNumberChoice = parseInt(userNumberChoiceStr);
console.log(userNumberChoice);

const compNumber = computerNumber();
console.log(compNumber);

let sum = userNumberChoice + compNumber;
console.log(sum);

whoWins();







