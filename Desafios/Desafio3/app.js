// crie um contador que comece em 1 e vá até 10 usando u loop While. Mostre cada número
let contadorCrescente = 1;
console.log('Contador crescente')
while(contadorCrescente <= 10) {
    console.log(contadorCrescente);
    contadorCrescente++;
}

// crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número
let contadorDecrescente = 10;
console.log('Contador descrescente')
while(contadorDecrescente >= 0) {
    console.log(contadorDecrescente);
    contadorDecrescente--;
}
// crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando o while no console do navegador
console.log('Contagem regressiva com input do usuário')
let inputUsuario = parseInt(prompt('Digite um número'));

while(inputUsuario !== 0) {

    if(inputUsuario > 0) {
        console.log(inputUsuario);
        inputUsuario--;

    } else {
        console.log(inputUsuario);
        inputUsuario++;
    }
}


// crie um prigrama de contagem progressiva. Peça um número e conte de 0 até esse núemro, usando um loop while do navegador