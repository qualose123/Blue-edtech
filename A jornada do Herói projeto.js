const prompt= require("prompt-sync")();
console.clear()

//Inicio
console.log("\n100 anos atrás o Rei demónio destruiu civilizações inteiras, e quando parecia ser o fim da humanidade, um herói apareceu e salvou a humanidade. Por um século a paz na humanidade reinou, contudo, diz a lenda que um dia o Rei demónio iria ressurgir, e com ele toda a destruição; mas como toda treva possui uma luz, um guerreiro iria surgir para combate-lo. e finalmente esse dia chegou, o rei demónio ressurgiu, caro herói, sua jornada começa agora. para combater o mal você deve escolher uma classe para aprimorar suas halibidades:\n")

console.log("Digite um número de [1] a [5] para escolher uma classe abaixo:")
//Escolha uma classe para iniciar a história
let classeEscolhida = +prompt("Escolha uma classe:1.Gatuno, 2.Paladino, 3.Cavaleiro, 4.Mago, 5.Druida- Ancião");
  let classe = "";
  switch (classeEscolhida) {
    case 1:
      classe = "Gatuno";
      break;
    case 2:
      classe = "Paladino";
      break;
    case 3:
      classe = "Cavaleiro";
      break;
    case 4:
      classe = "Mago";
      break;
    case 5:
      classe = "Druida";
      break;
  }
  console.log(`\nVocê escolheu ${classe}, Boa sorte em sua jornada Jovem Herói, que os Deuses estejam com você!\n`);
//PERGUNTA 1
  let pergunta = []
let i=0;

console.log("\nPara todas as perguntas abaixo, responda com [sim] ou [nao]\n")
console.log("\nPara continuar sua jornada você terá de encontrar o velho Ancião, que irá treina-lo para aprimorar suas habilidades para combater o Rei demónio.\n")
pergunta.push( prompt("Você encontrou o velho Ancião?").toUpperCase());

while(pergunta[i] != "SIM" && pergunta[i] != "NAO"){
    console.log("Você encontrou o velho Ancião?");
    pergunta[i]=prompt("Reponda com sim ou nao:").toUpperCase();
    console.clear();
}
i++;
//PERGUNTA 2
console.log("\nPara prosseguir com o treinamento você terá que achar o item mágico necessário para a criação de uma arma divina, a Pedra da Lua, que se encontra no mundo espiritual. Para entrar no mundo espiritual você deve meditar.- Ancião\n")
pergunta.push(prompt("Você conseguiu meditar e entrar no Mundo Espiritual?").toUpperCase());

while(pergunta[i] != "SIM" && pergunta[i] != "NAO"){
    console.log("Você conseguiu meditar e entrar no Mundo Espiritual?");
    pergunta[i]=prompt("Reponda com sim ou nao:").toUpperCase();
    console.clear();
};
//PERGUNTA 3
console.log("\nPara proceguir com o treinamento, você terá que achar O lendário ferreiro Olaf-O portador do martelo dos Deuses, e levar consigo o item mágico achado no mundo espiritual, para que ele possa forjar e converter esse item em uma arma divina.- Ancião\n")
pergunta.push(prompt("Você encontrou o lendário ferreiro Olaf?").toUpperCase());

while(pergunta[i] != "SIM" && pergunta[i] != "NAO"){
    console.log("Você encontrou o lendário ferreiro Olaf?");
    pergunta[i]=prompt("Reponda com sim ou nao:").toUpperCase();
    console.clear();
};
//PERGUNTA 4
console.log("\nEntão você é o famoso herói de que todos falam... Não me parece grandes coisas, veremos se será capaz de empunhar uma arma divina, forjarei de acordo com sua classe, vou iniciar o processo, está preparado?, para que eu possa prosseguir eu preciso de uma Pedra da Lua, você trouxe para mim?-Olaf.\n")
pergunta.push(prompt("Você trouxe a pedra da lua?").toUpperCase());

while(pergunta[i] != "SIM" && pergunta[i] != "NAO"){
    console.log("Você trouxe a Pedra da Lua?");
    pergunta[i]=prompt("Reponda com sim ou nao:").toUpperCase();
    console.clear();
};
//História
console.log("\nUau!, me enganei a seu respeito jovenzinho, você se provou digino de empunhar uma arma lendária, vá e traga a paz a humanidade novamente, conto com você!-Olaf\n")
console.log("\nGrrr!, então você é o meu inimigo dessa era? estou curioso para saber que tipo de habilidades você e esse graveto que você chama de arma divina tem.-Rei Demónio \n")
console.log("\n Pois bem, então vou matar você junto com sua curiosidade Rei Demónio, vou mostrar a você o que eu e meu graveto(arma divina) podemos fazer, vou acabar isso com um só ataque, meu ataque supremo!-Herói\n")
//Pergunta 5

pergunta.push(prompt("Deseja usar o Golpe supremo?").toUpperCase());

while(pergunta[i] != "SIM" && pergunta[i] != "NAO"){
    console.log("Deseja usar o Golpe supremo?");
    pergunta[i]=prompt("Reponda com sim ou nao:").toUpperCase();
    console.clear();
};

for (let j = 0; j < 5; j++) {
    if (pergunta[j] == "SIM") {
      pergunta[j] = 1;
    } else if (pergunta[j] == "NAO") {
      pergunta[j] = 0;
    }
    if (pergunta[j] == "SIM") {
      pergunta[j] = 1;
    } else if (pergunta[j] == "NAO") {
      pergunta[j] = 0;
    }
    if (pergunta[j] == "SIM") {
      pergunta[j] = 1;
    } else if (pergunta[j] == "NAO") {
      pergunta[j] = 0;
    }
    if (pergunta[j] == "SIM") {
      pergunta[j] = 1;
    } else if (pergunta[j] == "NAO") {
      pergunta[j] = 0;
    }
    if (pergunta[j] == "SIM") {
      pergunta[j] = 1;
    } else if (pergunta[j] == "NAO") {
      pergunta[j] = 0;
    }
  }
  
  const soma = pergunta[0] + pergunta[1] + pergunta[2] + pergunta[3] + pergunta[4];
  
  if (soma == 0) {
    console.log("\nO Herói falhou miseravelmente, o Rei Demónio devastou o mundo.\n");
  } else if (soma == 1 || soma == 2) {
    console.log("\nO herói conseguiu derrotar o Rei Demónio,contudo, muitas vilas e aldeias foram afetadas e muitas vidas foram perdidas durante o combate...\n");
  } else if (soma == 3) {
    console.log("\nO herói conseguiu derrotar o Rei demónio, mas falhou em sua missão, pois demorou muito a chegar ao local, sendo assim o Rei demónio ja tinha destruido boa parte das aldeias...\n ");
  } else if (soma == 4) {
    console.log("\nO Herói conseguiu derrotar o Rei demónio sem que ele fizesse muitos estragos, porém, não teve tempo o suficiente para conjurar seu golpe supremo completo, então o custo do feitiço acabou sendo sua própria vida!\n");
  } else {
    console.log("\nO Herói conseguiu derrotar o Rei demónio de maneira mas perfeita possível, sem que ele causasse quaisquer danos a população!, seu nome e feitos ficarão na história e serão lembrados por gerações!\n");
  }
  //FIM





