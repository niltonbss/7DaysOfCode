const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function startGame() {
  console.log("Bem-vindo ao jogo de desenvolvimento!");

  const area = await prompt("1. Escolha a área de Front-End ou Back-End: ");

  if (area.toLowerCase() === "front-end") {
    const frontEndChoice = await prompt("2. Escolha React ou Vue: ");
    console.log(`Você escolheu Front-End e vai aprender ${frontEndChoice}.`);
  } else if (area.toLowerCase() === "back-end") {
    const backEndChoice = await prompt("2. Escolha C# ou Java: ");
    console.log(`Você escolheu Back-End e vai aprender ${backEndChoice}.`);
  } else {
    console.log("Opção inválida. Reinicie o jogo e escolha uma área válida.");
    rl.close();
    return;
  }

  const specializationChoice = await prompt(
    "3. Deseja se especializar na área escolhida ou se tornar Fullstack? "
  );

  if (specializationChoice.toLowerCase() === "especializar") {
    console.log("Continue se aprimorando na sua área escolhida.");
  } else if (specializationChoice.toLowerCase() === "fullstack") {
    console.log(
      "Você está no caminho para se tornar um desenvolvedor Fullstack."
    );
  } else {
    console.log("Opção inválida. Reinicie o jogo e escolha uma opção válida.");
    rl.close();
    return;
  }

  let technologies = [];
  let moreTechnologies = true;

  while (moreTechnologies) {
    const tech = await prompt(
      "Digite uma tecnologia que você gostaria de aprender: "
    );
    technologies.push(tech);

    const continueChoice = await prompt(
      "Tem mais alguma tecnologia que você gostaria de aprender? (Responda 'ok' para continuar): "
    );
    moreTechnologies = continueChoice.toLowerCase() === "ok";
  }

  console.log("Você escolheu as seguintes tecnologias para aprender:");
  technologies.forEach((tech) => {
    console.log(`- ${tech}`);
  });

  console.log(
    "Parabéns por jogar o jogo de desenvolvimento! Espero que se divirta aprendendo e programando."
  );
  rl.close();
}

startGame();
