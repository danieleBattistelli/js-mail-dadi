//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Genero un numero casuale da 1 a 6 per il giocatore
const dadoGiocatore = Math.floor(Math.random() *6) + 1;
//Genero un numero casuale da 1 a 6 per il computer
const dadoComputer = Math.floor(Math.random() *6) + 1;

//Mostra i punteggi
console.log("Punteggio del giocatore:" , dadoGiocatore)
console.log("Punteggio del compueter:" , dadoComputer)

//Determino il vincitore
if(dadoGiocatore>dadoComputer){
    console.log("il giocatore vince!");
}else if (dadoGiocatore<dadoComputer) {
    console.log("il computer vince!");
} else {
    console.log("è un pareggio!");
}