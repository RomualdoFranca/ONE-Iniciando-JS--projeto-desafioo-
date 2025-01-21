let multiplicador = 100;
console.log(`Estou pensando em um número entre 1 e ${multiplicador}`);
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
console.log('Numero secreto ' + numeroSecreto);
let numeroDeJogadas = 0;

let palpiteDoJogador; 

while(palpiteDoJogador !== numeroSecreto) {
    
    let entrada = prompt('Em que número estou pensando?');
    palpiteDoJogador = parseInt(entrada);
    numeroDeJogadas++;
    console.log('While executado')
    
}
numeroDeJogadas == 1 ? console.log(`Parabéns. Você acertou em ${numeroDeJogadas} tentativa` ) :
console.log(`Parabéns. Você acertou em ${numeroDeJogadas} tentativas` );


