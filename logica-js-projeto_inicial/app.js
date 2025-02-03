let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// chamar a função fora de qualquer função para que ela iniciar quando for lido o app.js
exibirMensagemInicial();

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
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    // uma variavel que contem a quantidade de elementos da lista
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    //verifica que se atingiu a quantidade máxima de elementos
    if (quantidadeDeElementosNaLista == 3) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        // recursão: é quando uma função chama ela novamente. É uma função que chama uma própria função
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido); // o elemento é adicionado ao final da lista
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}