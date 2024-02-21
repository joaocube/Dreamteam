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
  const divApoio2 = criarElemento("div", ["apoio-card"]);

  const arroba = criarElemento(
    "a",
    ["font3-Bnm", "col-6"],
    "@Joaocube",
    "https://twitter.com/joaocube"
  );
  const arroba2 = criarElemento(
    "a",
    ["font3-Bnm", "col-6"],
    "@Nickname",
    "https://twitter.com/"
  );

  const arrobaP = criarElemento(
    "p",
    ["col-2", "font1-Pnm4"],
    "Frontend Developer : Idealizei o projeto com intuito de estudar e de 'brinde' participar da comunidade."
  );
  const arrobaP2 = criarElemento(
    "p",
    ["col-2", "font1-Pnm4"],
    "Fandom ____ e principal apoiador do DreamTeam. Todas as artes foram feitas pelos seus designers."
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
