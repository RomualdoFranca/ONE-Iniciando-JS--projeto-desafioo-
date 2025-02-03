let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// chamar a função fora de qualquer função para que ela iniciar quando for lido o app.js
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('O botão foi clicado');

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //formata a palavra tentativa
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        // quando a condicao do if for true, o botao reiniciar é ativado
        document.getElementById('reiniciar').removeAttribute('disabled'); // pegando o elemento pelo Id
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        }
        tentativas++; //incremeta o numero de tentativas
        limparCampo();

    }
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // gerando novo numero secreto
    console.log(numeroSecreto);
    limparCampo(); // limpando o campo de input
    tentativas = 1; // reiniciando as tentativas
    // exibindo as mensagens inicia do jogo
    exibirMensagemInicial();
    // setando a condição disabled no botao Novo Jogo
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
    
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}