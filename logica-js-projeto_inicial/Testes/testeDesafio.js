
/**let userName ;
userName = prompt("What's your name?");
alert("Welcome to the secret number game, " + userName);
alert("Can you guess what number I'm thinking of right now?");
let secretNumber = 5;
let playersGuess;
playersGuess = prompt("So let's see. \nWhat's the secret number?");

if (playersGuess == secretNumber) {
    // Template String
    alert(`Congratulations! ${playersGuess}  was the number I was thinking of`)

} else {
    alert ("Sorry. That's not the number I was thinking of :(")
}*/


let multiplicador = 100;
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
console.log('Numero secreto: ' + numeroSecreto);
let palpiteDoUsuario = prompt(`Estou pensando em um número entre 1 e ${multiplicador}.
    \nEm qual número estou pensando?`);

let numeroDeTentativas = 0;
while(palpiteDoUsuario !== numeroSecreto) {

    
    numeroDeTentativas++;
    
}
console.log('Numero de tentativas ' + numeroDeTentativas)