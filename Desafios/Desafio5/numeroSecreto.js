alert('Bem ao Jogo do Número secreto.');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let palpiteDoUsuario = prompt(`Estou pensando em um número entre 1 e ${numeroSecreto}.
    \nEm qual número estou pensando?`);