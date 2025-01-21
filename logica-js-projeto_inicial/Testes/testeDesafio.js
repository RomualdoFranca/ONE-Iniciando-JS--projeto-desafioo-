
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




const menorNumero = 1;
const maiorNumero = 4;
//const numeroAleatorio = Math.floor(Math.random() * (maiorNumero - menorNumero + 1) + menorNumero);
//alert(`Numero aleatório entre 1 e 10:\n${numeroAleatorio}`);

/**const numeroAleatorio = Math.floor(Math.random() * (maiorNumero - menorNumero + 1) + menorNumero);
for(let i = 1; i < 5; i++){
    numeroAleatorio
    alert(`Número aleatorio da ${i}° rodada: ${numeroAleatorio}`);
}*/

/**for (let i = 1; i < 5; i++) {

    const menorNumero = 1;
    const maiorNumero = 4;
    const numeroAleatorio = Math.floor(Math.random() * (maiorNumero - menorNumero + 1) + menorNumero);
    // mostra no console o numero aleatorio
    console.log(numeroAleatorio);

    let palpite = prompt(`${i}° Rodada\nDigite seu palpite: `);
    numeroAleatorio == palpite ? alert('Parabéns! Você acertou.') : alert('Que pena. Tente novamente para ganhar.');

}*/
let numEntre1e10 = parseInt(Math.random() * 10 + 1);
console.log(numEntre1e10);
