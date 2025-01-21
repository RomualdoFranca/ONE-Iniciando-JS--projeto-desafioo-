let multiplicador = 100;
console.log(`Estou pensando em um número entre 1 e ${multiplicador}`);
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
console.log('Numero secreto ' + numeroSecreto);
let numeroDeJogadas = 0;

let palpiteDoJogador = parseInt(prompt('Em que número estou pensando?'));
console.log('palpite do jogador ' + palpiteDoJogador);

while(palpiteDoJogador !== numeroSecreto) {
    
    // numeroDeJogadas++;
    // console.log(palpiteDoJogador);
    
    // console.log('O while foi executado');
    
    
}
console.log('Numero de jogadas = ' + numeroDeJogadas);
