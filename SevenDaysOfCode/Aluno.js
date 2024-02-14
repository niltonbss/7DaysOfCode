// Solicita ao usuário seu nome
const nome = prompt("Qual o seu nome?");

// Solicita ao usuário sua idade
const idade = prompt("Quantos anos você tem?");

// Solicita ao usuário qual linguagem de programação está estudando
const linguagem = prompt("Qual linguagem de programação você está estudando?");

// Cria uma mensagem de boas-vindas utilizando os dados fornecidos pelo usuário
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"`;

// Exibe a mensagem de boas-vindas para o usuário
alert(msg);

// Pergunta ao usuário se ele gosta de estudar a linguagem de programação que escolheu
const gosta = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`
);

// Verifica a resposta do usuário e exibe uma mensagem correspondente
if (gosta == 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gosta == 2) {
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
