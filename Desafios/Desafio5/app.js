// alert('Bem vindo ao Jogo do Número Secreto.');
let multiplicador = 100;
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
console.log('Numero secreto: ' + numeroSecreto);
let palpiteDoUsuario = prompt(`Estou pensando em um número entre 1 e ${multiplicador}.
    \nEm qual número estou pensando?`);

let numeroDeTentativas = 0;
while(palpiteDoUsuario !== numeroSecreto) {

    if(palpiteDoUsuario == numeroSecreto){
        console.log(`Parabéns! Você acertou o número secreto em ${numeroDeTentativas}`);
    }
    
    // palpiteDoUsuario > numeroSecreto ? alert(`O número secreto é menor que ${palpiteDoUsuario}`) :
    // alert(`O número secreto é maior que ${palpiteDoUsuario}`);

    // if(palpiteDoUsuario == numeroSecreto) {
    //     alert(`Parabéns! Você acertou o número secreto em ${numeroDeTentativas}`);
    // }
    numeroDeTentativas++;
    
}