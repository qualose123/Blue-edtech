const prompt = require("prompt-sync")();

//A jornada do Herói//
const historia =
  "100 anos atrás o Rei demónio destruiu civilizações inteiras, e quando parecia ser o fim da humanidade, um herói apareceu e salvou a humanidade. Por um século a paz na humanidade reinou, contudo, diz a lenda que um dia o Rei demónio iria ressurgir, e com ele toda a destruição; mas como toda treva possui uma luz, um guerreiro iria surgir para combate-lo. e finalmente esse dia chegou, o rei demónio ressurgiu, caro herói, sua jornada começa agora. para combater o mal você deve escolher uma classe para aprimorar suas halibidades:";
console.log(historia);

console.log();

//Escolha uma classe para iniciar a história
let classeEscolhida = +prompt(
  "Escolha uma classe:1.Gatuno, 2.Paladino, 3.Cavaleiro, 4.Mago, 5.Druida- Ancião"
);
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
console.log(classe);
console.log();

//inicio das perguntas SIM e NÃO, pergunta 1
const escolha = prompt("Você escolheu uma classe? sim ou não-Ancião?");
console.log(escolha);
if (escolha == "sim") {
  console.log(`Perfeito, você escolheu- ${classe}!- Ancião`);
} else {
  console.log(
    "Tudo bem,você ainda não se sente confortavel sobre qual classe você quer...- Ancião"
  );
}
console.log();

//Historia/pergunta 2
const itemMagico =
  "Se ainda não decidiu sua classe você pode adiar por enquando e ir para o próximo objetivo, mas até o fim da jornada terá de escolher uma classe. Para prosseguir com o treinamento você terá que achar o item mágico necessário para a criação de uma arma divina, que se encontra no mundo espiritual. Para entrar no mundo espiritual você deve meditar.- Ancião";
console.log(itemMagico);
const meditar = prompt("Deseja meditar? sim ou não?-Ancião");
if (meditar == "sim") {
  console.log("Uau, você achou a RUNA DA LUZ!-Ancião");
} else {
  console.log(
    "Você não está relaxando o suficiente, tente novamente, ou terá de encontrar o item pela maneira dificil: no mundo físico, no Vale da Morte; porém levará mais tempo, que é o que não temos no momento-Ancião"
  );
}
console.log();
//Historia/perguta 3
const forjar =
  "Para forjar a arma você terá de escolher uma classe. caso ja tenha escolhido, vá até o ferreiro lendário Olaf-O portador do Martelo dos Deuses, caso contrário, vá até ele e peça dicas sobre como saber qual classe deva escolher.-Ancião ";
console.log(forjar);
console.log();

const olaf = prompt(
  "Então você é o famoso herói de que todos falam... Não me parece grandes coisas, veremos se será capaz de empunhar uma arma divina, forjarei de acordo com sua classe, posso iniciar o processo? sim ou não?-Olaf"
);
console.log();
if (olaf == "sim") {
  console.log(
    "Uau!, me enganei a seu respeito jovenzinho, você se provou digino de empunhar uma arma lendária, vá e traga a paz a humanidade novamente, conto com você!-Olaf"
  );
} else {
  console.log(
    "Entendo... todo guerreiro ja sente a sua vocação em sua alma, caso não sinta... você é... não é possivel... achei que era um mito.., você é um renegado!, um renegado é um guerreiro que combate trevas com a própria magia das trevas, nesse caso guardei esta runa da escuridão que me foi passada pela minha familia de gerações em gerações, com ela posso forjar uma arma das trevas para que você atinga seu potencial ao máximo!-Olaf"
  );
}
console.log();

//Historia/pergunta 4
const caminho =
  "Agora que está pronto para o combate, você terá que pegar o portal no centro da cidade,ou o caminho mais longo, ir andando pela floresta das feras, -Olaf";
const destino = prompt(
  "Você deseja ir pelo caminho mais rápido? se sim, você é esperto, se não, você é ousado, mas cuidado, quanto mais tempo você perde, é mais uma civilização que o Rei demônio está destruindo-Olaf"
);
console.log();
if (destino == "sim") {
  console.log("Perfeito moleque, mande o Rei demonio pelos áres!-Olaf");
} else {
  console.log("Correeee molequeeee,o tempo é crucial!!!-Olaf");
}
console.log();
//Historia/Pergunta 5
const historiaFinal =
  "O herói enfim chega a grande batalha final, se encontra cara a cara com o Rei demonio,";
console.log(historiaFinal);
console.log();
const dialogoDemon =
  "-Então você é o Herói dessa era que veio tentar me impedir, estranho... você é diferente de todos com quem ja lutei... estou curioso...-Rei Demónio";
console.log(dialogoDemon);
console.log();
const dialogoHeroi =
  "Hum...ah é? então vou matar sua curiosidade e com ela você junto, prepare-se, vou acabar com isso com um só ataque!-Herói";
console.log(dialogoHeroi);
console.log();
const golpeSupremo = prompt(
  "O Rei Demónio está mais forte do que nunca... tenho duas alternativas... sim-posso abrir um portal pro submundo e me jogo com ele lá e salvo a humanidade ou melhor não, posso usar minha magía suprema, porém atingirei uma grande área podendo destruir parte da floresta em prol de um bem maior..., o que farei?"
);
console.log();
if (golpeSupremo == "sim") {
  console.log(
    "voz subconciente-Minha vida foi tão curta.., mas fico feliz que no meu fim, possa ter lutado até o final pelo mundo que amo/Palavras finais:Você não vai destruir meu mundo,a humanidade viverá, e te derrotará quantas vezes necessárias, afinal, o petencial evolutivo da humanidade é infinito!-Herói "
  );
} else {
  console.log(
    "Espero que um dia me perdoem pela decisão que tomei, foi em pról de um bem maior-Herói"
  );
}
console.log();
const final =
  "E assim terminou a história do herói, agora vamos ver se vocês absorveram o conhecimento que passei para vocês crianças, farei uma pergunta, com base na reposta de vocês, darei uma colocação a vocês,levando em consideração que você seria o herói da história. Ah, e só pra lembrar, minha colocação é com base em quantas vezes a suas respostas foram sim ou não. - Ancião ";
const perguntass = +prompt("Quantas vezes a resposta do herói foram sim ?");
if (perguntass == 0) {
  console.log("Você falhou mizeravelmente como herói, estou desapontado!");
} else if (perguntass == 1 || perguntass == 2) {
  console.log(
    "Você falhou, mas ainda consegue fugir da situação,erga-se herói!"
  );
} else if (perguntass == 3) {
  console.log(
    "Você chegou perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco, é uma pena."
  );
} else if (perguntass == 4) {
  console.log(
    "Depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita, mas o importante é tentar"
  );
} else if (perguntass == 5) {
  console.log(
    "Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações, parabéns."
  );
}
