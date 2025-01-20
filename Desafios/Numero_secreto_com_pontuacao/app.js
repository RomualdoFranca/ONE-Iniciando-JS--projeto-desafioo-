/**
 * Criar as variaveis
 * nome; pontosInicias;
 * 
 * Criar alertas
 * Bem vindo;
 * Qual o seu nome? 
 * Regras do jogo
 * 
 * Criar estrutura condicional para calcular os ganhos e percas do jogo
 * Criar a iteração para as rodadas do jogo
 * 
 */

alert('Bem vindo ao Jogo do Número Secreto');
let usuarioNome = prompt('Qual o seu nome?');

alert('Regras do jogo')
alert(`Olá ${usuarioNome}. Você tem 100 ponto iniciais.\nO jogo tem 4 rodadas.\nA cada palpite correto você ganha 25 pontos.\nA cada palpite errado você perde 25 pontos.\nVocê vence o jogo se, ao final das 4 rodadas, sua pontuação for maior que 100 pontos.`)

let pontosDoJogo = 100;





alert(`Vamos começar?${usuarioNome}?\nEstou pensando num número entre 0 e 5.\nEm que número estou pensando?`);

// gera o numero aleatorio e testa o acerto ou erro
for (let i = 1; i < 5; i++) {

    //gera numeros inteiros aleatorio num intervao predefinido
    const menorNumero = 1;
    const maiorNumero = 4;
    const numeroSecreto = Math.floor(Math.random() * (maiorNumero - menorNumero + 1) + menorNumero);
    // usando o console para depurar e testar o código
    console.log(numeroSecreto);

    let palpite = prompt(`${i}° Rodada\nDigite seu palpite: `);

    // testa se o palpite é igual ao numero aleatorio
    if (numeroSecreto == palpite) {

        // soma 25 pontos para palpites corretos
        pontosDoJogo += 25;
        alert(`Parabéns. Acertou!\nTotal de pontos: ${pontosDoJogo}`); // template strings
    } else {
        // subtrai 25 pontos se o palpite for incorreto
        pontosDoJogo -= 25;
        alert(`Que pena. Você errou.\nTotal de pontos: ${pontosDoJogo}`);

    }

    // mostra o total de pontos e o resultado do jogo após a 4° rodada
    if(i == 4) {
        if(pontosDoJogo > 100) {
            alert(`Parabéns! Você Venceu\nTotal de pontos: ${pontosDoJogo}`)
        } else {
            alert(`Que pena. Mais sorte da próxima vez\nTotal de pontos: ${pontosDoJogo}`)
        }
    }
    
}

