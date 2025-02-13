//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let mensagemBoasVindas = "Bem vindo ao programa ONE";
console.log(mensagemBoasVindas);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Romualdo França";
console.log(nome);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nomeAlert = "Puga Fedida";
alert(nomeAlert);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemFavorita);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} = ${resultado}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valorSubtracao1 = 5;
let valorSubtracao2 = 3;
let resultadoSubtracao = valorSubtracao1 - valorSubtracao2;
console.log(`A diferença de ${valorSubtracao1} - ${valorSubtracao2} = ${resultadoSubtracao}`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let inputIdade = prompt("Insira sua idade.");
inputIdade >= 18 ? console.log("Você é maior de idade.") : console.log("Você é menor de idade.");

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Insira um número.");
console.log("Numero inserido = " + numero);
if(numero == 0) {
    console.log("O número inserido é ZERO.");

} else {
    numero > 0 ? console.log("O número inserido é positivo.") : console.log("O número inserido é negativo");
    
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let qualquerNumeroAleatorio = Math.random();
console.log(qualquerNumeroAleatorio);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numEntre1e10 = parseInt(Math.random() * 10 + 1);
console.log(numEntre1e10);

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numEntre1e1000 = parseInt(Math.random() * 1000 + 1);
console.log(numEntre1e1000);