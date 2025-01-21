// alert('Bem vindo ao Jogo do Número Secreto.');
let multiplicador = 100;
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
console.log('Numero secreto: ' + numeroSecreto);
alert(`Estou pensando em um número entre 1 e ${multiplicador}.`);

let palpite;
let numeroDeTentativas = 0;

while(palpite !== numeroSecreto) {

    let entrada = prompt('Em qual número estou pensando?');
    palpite = parseInt(entrada);
    numeroDeTentativas++;

    // dicas para o jogador
    if(palpite > numeroSecreto) {
        alert(`O número ${palpite} é maior que o número secreto.\nTente outra vez.`);

    } else if (palpite < numeroSecreto){
        alert(`O número ${palpite} é menor que o número secreto.\nTente outra vez.`);

    } else {
        // implementa singular ou plural da palavra 'tentativa'
        numeroDeTentativas == 1 ? alert(`Fantástico! Você acertou em apenas 1 tentativa`):
        alert(`Parabéns! Você acertou em ${numeroDeTentativas} tentativas.`);
    }
}

