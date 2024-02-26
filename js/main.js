// TODOS OS LINKS ABREM EM OUTRA ABA
let linksBlank = document.querySelectorAll(".linkBlank");
linksBlank.forEach(function (linkBlank) {
  linkBlank.setAttribute("target", "_blank");
});

// Criação do artigo
var article = document.createElement("article");
article.className = "header-container all-container";

// Criação do conteúdo do cabeçalho
var headerContent = document.createElement("div");
headerContent.className = "header-conteudo";

// Criação do logo
var logo = document.createElement("div");
logo.className = "logo";
var logoLink = document.createElement("a");
logoLink.href = "index.html";
var logoImg = document.createElement("img");
logoImg.src = "./assets/img/logo-main.webp";
logoImg.alt = "imagem logo";
logoImg.width = "46";
logoImg.height = "46";
logoImg.id = "logo";
logoLink.appendChild(logoImg);
logo.appendChild(logoLink);

// Criação das redes sociais
var redesSociais = document.createElement("div");
redesSociais.className = "redes-sociais";
var ul = document.createElement("ul");

// Criação do botão de ajuste
var liAjuste = document.createElement("li");
var imgAjuste = document.createElement("img");
imgAjuste.src = "./assets/img/icon/icon-ajuste.svg";
imgAjuste.alt = "imagem ajuste";
imgAjuste.width = "24";
imgAjuste.height = "24";
imgAjuste.id = "btn-ajuste";
imgAjuste.addEventListener("click", mudar); // Adicionando o evento de clique
liAjuste.appendChild(imgAjuste);

var header = document.getElementById("header-bg");

// Criação do botão de informações
var liInfo = document.createElement("li");
var imgInfo = document.createElement("img");
imgInfo.src = "./assets/img/icon/icon-info.svg";
imgInfo.alt = "imagem informacoes";
imgInfo.width = "36";
imgInfo.height = "24";
imgInfo.id = "btnModal";
liInfo.appendChild(imgInfo);

ul.appendChild(liAjuste);
ul.appendChild(liInfo);
redesSociais.appendChild(ul);

// Adicionando elementos ao conteúdo do cabeçalho
headerContent.appendChild(logo);
headerContent.appendChild(redesSociais);

// Adicionando conteúdo do cabeçalho ao artigo
article.appendChild(headerContent);

// Adicionando artigo ao cabeçalho
header.appendChild(article);

// MODAL INFO
let modal = document.getElementById("Modal");
let btnModal = document.getElementById("btnModal");
// Ação ao clicar na imagem
btnModal.onclick = function () {
  modal.style.display = "block";
};
// Função para fechar o modal
function fecharModal() {
  modal.style.display = "none";
}
// COMPARTILHAR NO X
function share(usuario) {
  var nomeUsuario = encodeURIComponent(usuario);
  var textoTweet = "Esse é o meu DreamTeam ";
  var urlTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    textoTweet
  )}${nomeUsuario}`;
  window.open(urlTwitter, "_blank");
}

// CRIANDO BANNER
document.addEventListener("DOMContentLoaded", function () {
  let bannerMain = document.createElement("img");
  bannerMain.src = "./assets/img/banner-main.webp";
  bannerMain.alt = "imagem principal";
  bannerMain.classList.add("main");
  // LOCAL ONDE VAI SER ADICIONADO O ELEMENTO CRIADO
  const contBanner = document.querySelector(".banner-conteudo");
  contBanner.appendChild(bannerMain);
});

// CRIANDO TODO A PARTE DE INFO DO GAME
var article = document.createElement("article");
article.className = "info-container all-container";
// Criação do conteúdo
var content = document.createElement("div");
content.className = "info-conteudo";
// Criação da lista de informações
var infoList = document.createElement("div");
infoList.className = "infos";

// Função para criar um card de informação
function createInfoCard(imgSrc, altText, title, description, imgId) {
  var infoCard = document.createElement("div");
  infoCard.className = "info-card";
  var picture = document.createElement("picture");
  var img = document.createElement("img");
  img.src = imgSrc;
  img.alt = altText;
  img.id = imgId;
  picture.appendChild(img);
  infoCard.appendChild(picture);

  var infoText = document.createElement("div");
  infoText.className = "info-text";

  var heading = document.createElement("h1");
  heading.className = "col-5 font2-Mnm upc decoracao";
  heading.textContent = title;

  var br = document.createElement("br");
  var paragraph = document.createElement("p");
  paragraph.className = "col-2 font1-Pnm4";
  paragraph.textContent = description;
  infoText.appendChild(heading);
  infoText.appendChild(br);
  infoText.appendChild(paragraph);
  infoCard.appendChild(infoText);

  return infoCard;
}
// Criando os três cards de informação
var card1 = createInfoCard(
  "./assets/img/info1-red.webp",
  "imagem",
  "THE TEAM",
  "Escolha 5 jogadores, se quiser mudar um jogador basta excluir (-) e adicionar outro (+).",
  "red1"
);
var card2 = createInfoCard(
  "./assets/img/info2-red.webp",
  "imagem",
  "THE DREAM",
  "Não existe quantidade de 'créditos' para montar seu dreamteam, não limitaremos você.",
  "red2"
);
var card3 = createInfoCard(
  "./assets/img/info3-red.webp",
  "imagem",
  "THE LEGENDS",
  "Compartilhe e marque a @______ no twitter/x e faça parte da nossa comunidade.",
  "red3"
);
const section = document.getElementById("info-bg");
// Adicionando os cards à lista de informações
infoList.appendChild(card1);
infoList.appendChild(card2);
infoList.appendChild(card3);
// Adicionando a lista de informações ao conteúdo
content.appendChild(infoList);
// Adicionando o conteúdo ao artigo
article.appendChild(content);
// Adicionando o artigo à seção
section.appendChild(article);

// CRIANDO CARDS DO ARROBA
document.addEventListener("DOMContentLoaded", function () {
  // Função para criar elementos e configurar atributos
  function criarElemento(tag, classes, texto, link) {
    const elemento = document.createElement(tag);
    if (classes) elemento.classList.add(...classes);
    if (texto) elemento.textContent = texto;
    if (link) {
      elemento.setAttribute("href", link);
      elemento.setAttribute("target", "_blank");
    }
    return elemento;
  }

  // Criação dos elementos
  const divApoio = criarElemento("div", ["apoio-card"]);
  divApoio.style.padding = "20px";
  divApoio.style.width = "350px";
  divApoio.style.background = "var(--col-1)";
  const divApoio2 = criarElemento("div", ["apoio-card"]);
  divApoio2.style.padding = "20px";
  divApoio2.style.width = "350px";
  divApoio2.style.background = "var(--col-1)";

  const arroba = criarElemento(
    "a",
    ["font3-Bnm", "col-3"],
    "@Joaocube",
    "https://twitter.com/joaocube"
  );
  const arroba2 = criarElemento(
    "a",
    ["font3-Bnm", "col-3"],
    "@Nickname",
    "https://twitter.com/"
  );
  const arrobaP = criarElemento(
    "p",
    ["col-2", "font1-Pnm4"],
    "Frontend Developer : Idealizei o projeto com intuito de estudar."
  );
  const arrobaP2 = criarElemento(
    "p",
    ["col-2", "font1-Pnm4"],
    "Principal apoiador, todas as artes foram feitas pela sua equipe."
  );
  const apoioConteudo = document.querySelector(".apoio-conteudo");

  // Adição dos elementos à DOM
  divApoio.appendChild(arroba);
  divApoio2.appendChild(arroba2);
  divApoio.appendChild(arrobaP);
  divApoio2.appendChild(arrobaP2);
  apoioConteudo.appendChild(divApoio);
  apoioConteudo.appendChild(divApoio2);
});

// MUDA TUDO PRO BLUE SIDE
let anguloRotacao = 0;
function mudar() {
  anguloRotacao = anguloRotacao === 0 ? 180 : 0;
  const imgIcon = document.getElementById("btn-ajuste");
  imgIcon.style.transform = `rotate(${anguloRotacao}deg)`;
  const bannerMudar = document.querySelector(".main");
  const logoMain = document.getElementById("logo");
  const titleDream = document.getElementById("title");
  const red1 = document.getElementById("red1");
  const red2 = document.getElementById("red2");
  const red3 = document.getElementById("red3");
  const imgAfter = document.getElementById("game-after");
  const imgPath = anguloRotacao === 180 ? "2" : "";

  atualizarImagem(bannerMudar, `./assets/img/banner-main${imgPath}.webp`);
  atualizarImagem(logoMain, `./assets/img/logo-main${imgPath}.webp`);
  atualizarCorTexto(
    titleDream,
    anguloRotacao === 180 ? "var(--col-8)" : "var(--col-6)"
  );
  atualizarImagem(
    red1,
    `./assets/img/info1-${anguloRotacao === 180 ? "blue" : "red"}.webp`
  );
  atualizarImagem(
    red2,
    `./assets/img/info2-${anguloRotacao === 180 ? "blue" : "red"}.webp`
  );
  atualizarImagem(
    red3,
    `./assets/img/info3-${anguloRotacao === 180 ? "blue" : "red"}.webp`
  );
}
function atualizarImagem(elemento, caminho) {
  elemento.src = caminho;
}
function atualizarCorTexto(elemento, cor) {
  elemento.style.color = cor;
}

// ADD FOOTER E ATUALIZANDO O ANO AUTOMATICAMENTE
document.addEventListener("DOMContentLoaded", function () {
  let direitoAutoral = document.createElement("p");
  const agora = new Date();
  const inicio = 2023;
  const ano = agora.getFullYear();
  direitoAutoral.classList.add("font1-Pnm2", "col-2");
  direitoAutoral.textContent = `Joaocube © ${inicio} - ${ano}`;
  let footer = document.querySelector(".footer-conteudo");
  footer.appendChild(direitoAutoral);
});
