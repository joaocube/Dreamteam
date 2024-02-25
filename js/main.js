// TODOS OS LINKS ABREM EM OUTRA ABA
let linksBlank = document.querySelectorAll(".linkBlank");
linksBlank.forEach(function (linkBlank) {
  linkBlank.setAttribute("target", "_blank");
});

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

// SLIDER
const slider = document.querySelector("[data-slider]");
const track = slider.querySelector("[data-slider-track]");
const prev = slider.querySelector("[data-slider-prev]");
const next = slider.querySelector("[data-slider-next]");

if (track) {
  prev.addEventListener("click", () => {
    next.removeAttribute("disabled");
    track.scrollTo({
      left: track.scrollLeft - track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  });

  next.addEventListener("click", () => {
    prev.removeAttribute("disabled");
    track.scrollTo({
      left: track.scrollLeft + track.firstElementChild.offsetWidth,
      behavior: "smooth",
    });
  });

  track.addEventListener("scroll", () => {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");

    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }
  });
}

// CRIANDO BANNER E FOOTER
document.addEventListener("DOMContentLoaded", function () {
  let bannerMain = document.createElement("img");
  bannerMain.src = "./assets/img/banner-main.webp";
  bannerMain.alt = "imagem principal";
  bannerMain.classList.add("main");
  // LOCAL ONDE VAI SER ADICIONADO O ELEMENTO CRIADO
  const contBanner = document.querySelector(".banner-conteudo");
  contBanner.appendChild(bannerMain);

  let direitoAutoral = document.createElement("p");
  direitoAutoral.classList.add("font1-Pnm2", "col-2");
  direitoAutoral.textContent = "JoaoCube © Todos os direitos reservados";
  // SELECAO ONDE VAI SER ADICIONADO
  let footer = document.querySelector(".footer-conteudo");
  // ADICIONANDO ATRIBUTO AO FOOTER
  footer.appendChild(direitoAutoral);
});

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
