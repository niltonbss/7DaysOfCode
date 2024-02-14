// Função para realizar a soma de dois números
function soma(a, b) {
  return a + b;
}

// Função para realizar a subtração de dois números
function subtracao(a, b) {
  return a - b;
}

// Função para realizar a multiplicação de dois números
function multiplicacao(a, b) {
  return a * b;
}

// Função para realizar a divisão de dois números
function divisao(a, b) {
  // Verifica se o segundo número é zero para evitar divisão por zero
  if (b === 0) {
    return "Erro: divisão por zero";
  } else {
    return a / b;
  }
}

// Loop principal
while (true) {
  // Mostra as opções disponíveis para o usuário
  console.log("Escolha a operação:");
  console.log("1. Soma");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("5. Sair");

  // Entrada do usuário para escolher a operação
  var escolha = prompt("Digite o número da operação desejada (1 a 5): ");

  // Verifica se o usuário deseja sair do programa
  if (escolha === "5") {
    console.log("Até a próxima!");
    break; // Sai do loop principal
  }

  // Solicita os dois números para realizar a operação
  var num1 = parseFloat(prompt("Digite o primeiro número: "));
  var num2 = parseFloat(prompt("Digite o segundo número: "));

  // Realiza a operação escolhida pelo usuário e exibe o resultado
  switch (escolha) {
    case "1":
      console.log("Resultado:", soma(num1, num2));
      break;
    case "2":
      console.log("Resultado:", subtracao(num1, num2));
      break;
    case "3":
      console.log("Resultado:", multiplicacao(num1, num2));
      break;
    case "4":
      console.log("Resultado:", divisao(num1, num2));
      break;
    default:
      // Se a escolha não for válida, exibe uma mensagem de erro
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
  }
}
