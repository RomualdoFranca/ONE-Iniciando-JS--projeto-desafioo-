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
alert(`Ola ${usuarioNome}. Você tem 100 ponto iniciais.\nO jogo tem 4 rodadas.\nA cada palpite correto você ganha 25 pontos.\nA cada palpite errado você perde 25 pontos.\nVocê vence o jogo se, ao final das 4 rodadas, sua pontuação for igual ou maior de 100.`)

let pontosDoJogo = 100;
let contadorDeRodadas = 0;
