// Função para agrupar os itens da lista por categoria
function agruparPorCategoria(lista) {
  const categorias = {}; // Cria um objeto vazio para armazenar os itens agrupados por categoria

  lista.forEach((item) => {
    // Itera sobre cada item na lista
    if (!categorias[item.categoria]) {
      // Verifica se a categoria do item ainda não existe nas categorias
      categorias[item.categoria] = [item.nome]; // Se não existir, cria uma nova entrada no objeto categorias com um array contendo o nome do item
    } else {
      categorias[item.categoria].push(item.nome); // Se a categoria já existir, adiciona o nome do item ao array dessa categoria
    }
  });

  return categorias; // Retorna o objeto com os itens agrupados por categoria
}

// Função principal do programa
function listaDeCompras() {
  const listaDeCompras = []; // Cria um array vazio para armazenar os itens da lista de compras

  while (true) {
    // Loop  para adicionar itens até que o usuário decida parar
    const adicionarItem = prompt(
      "Deseja adicionar um item na lista de compras? (sim/não)"
    ).toLowerCase(); // Pergunta ao usuário se deseja adicionar um item e converte a resposta para minúsculas

    if (adicionarItem !== "sim" && adicionarItem !== "s") {
      // Se a resposta do usuário não for "sim" ou "s", sai do loop
      break;
    }

    const nomeItem = prompt("Digite o nome do item:"); // Pede ao usuário para digitar o nome do item
    const categoriaItem = prompt(
      "Em qual categoria esse item se encaixa? (frutas, laticínios, congelados, doces, etc.):"
    ); // Pede ao usuário para digitar a categoria do item

    listaDeCompras.push({ nome: nomeItem, categoria: categoriaItem }); // Adiciona o item à lista de compras como um objeto com nome e categoria
  }

  const itensAgrupados = agruparPorCategoria(listaDeCompras); // Chama a função para agrupar os itens por categoria

  console.log("Lista de compras:");
  for (const categoria in itensAgrupados) {
    // Itera sobre cada categoria no objeto de itens agrupados
    console.log(`    ${categoria}: ${itensAgrupados[categoria].join(", ")}`); // Exibe a categoria seguida dos itens dessa categoria, separados por vírgula
  }
}

// Chamada da função principal
listaDeCompras();
