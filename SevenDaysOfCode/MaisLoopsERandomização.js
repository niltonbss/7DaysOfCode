// Função para gerar um número aleatório entre min e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função principal do jogo
  function jogoAdivinhacao() {
    // Escolher um número aleatório entre 0 e 10
    const numeroSecreto = gerarNumeroAleatorio(0, 10);
    let tentativas = 3; // Inicializa o número de tentativas como 3
  
    console.log("Bem-vindo ao jogo de adivinhação!");
    console.log("Tente adivinhar o número secreto entre 0 e 10.");
  
    // Loop enquanto ainda houverem tentativas
    while (tentativas > 0) {
      // Pede ao usuário para inserir um palpite e converte para inteiro
      const chute = parseInt(prompt("Digite seu chute:"));
  
      // Verifica se o palpite do usuário é igual ao número secreto
      if (chute === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto:", numeroSecreto);
        return; // Encerra o jogo se acertar
      } else {
        // Se o palpite estiver errado, decrementa o número de tentativas
        tentativas--;
        console.log("Você errou! Você ainda tem", tentativas, "tentativas.");
      }
    }
  
    // Se o usuário esgotar todas as tentativas, revela o número secreto
    console.log("Suas tentativas acabaram! O número secreto era:", numeroSecreto);
  }
  
  // Executar o jogo
  jogoAdivinhacao();