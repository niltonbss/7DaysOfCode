const prompt = require("prompt-sync")(); // Importa o módulo prompt-sync para receber entrada do usuário de forma síncrona

let listaDeCompras = []; // Inicializa a lista de compras vazia

// Função para imprimir a lista de compras
function imprimirLista() {
  if (listaDeCompras.length === 0) {
    console.log("A lista de compras está vazia.");
  } else {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

// Função para adicionar um item à lista de compras
function adicionarItem() {
  const item = prompt(
    "Digite o nome do item que deseja adicionar à lista de compras: "
  );
  listaDeCompras.push(item);
  console.log(`${item} foi adicionado à lista de compras.`);
}

// Função para remover um item da lista de compras
function removerItem() {
  imprimirLista(); // Chama a função para imprimir a lista atual de compras
  if (listaDeCompras.length === 0) {
    // Verifica se a lista está vazia
    console.log("Não há itens para remover.");
    return;
  }
  const itemRemover = prompt("Digite o número do item que deseja remover: "); // Solicita ao usuário o número do item a ser removido
  const index = parseInt(itemRemover) - 1; // Converte a entrada do usuário para um índice de array
  if (index >= 0 && index < listaDeCompras.length) {
    // Verifica se o índice é válido
    const itemRemovido = listaDeCompras.splice(index, 1); // Remove o item da lista
    console.log(`${itemRemovido} foi removido da lista de compras.`);
  } else {
    console.log("Não foi possível encontrar o item dentro da lista!");
  }
}

// Função principal que controla o fluxo do programa
function main() {
  while (true) {
    // Loop principal
    console.log("\nMenu:");
    console.log("1. Adicionar item à lista de compras");
    console.log("2. Remover item da lista de compras");
    console.log("3. Imprimir lista de compras");
    console.log("4. Sair");

    const opcao = prompt("Escolha uma opção: "); // Solicita ao usuário a escolha de uma opção
    console.log();

    switch (opcao) {
      case "1":
        adicionarItem(); // Chama a função para adicionar um item
        break;
      case "2":
        removerItem(); // Chama a função para remover um item
        break;
      case "3":
        imprimirLista(); // Chama a função para imprimir a lista
        break;
      case "4":
        console.log("Saindo do programa.");
        return; // Encerra o programa
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

main(); // Chama a função principal para iniciar o programa
