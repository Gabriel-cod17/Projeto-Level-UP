const header_Agencia_Marketing = document.getElementById(
  "header_Agencia_Marketing",
);
const saiu_Cima = document.querySelectorAll(".saiu-cima");
const saiu_lado_esquerdo = document.querySelectorAll(".saiu-lado-esquerdo");
const saiu_lado_direito = document.querySelectorAll(".saiu-lado-direito");
const saiu_baixo = document.querySelectorAll(".saiu-baixo ");
const divAbrirMenu = document.getElementById("div_abrir_Menu");
const headerMobile = document.querySelector(".header_Mobile");
const link = document.querySelectorAll(".link");

link.forEach((l) => {
  l.addEventListener("click", () => {
    headerMobile.style.display = "none";
  });
});

divAbrirMenu.addEventListener("click", () => {
  if (headerMobile.style.display == "flex") {
    headerMobile.style.display = "none";
  } else {
    headerMobile.style.display = "flex";
  }
});

const observerCima = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("entrou");
    }
  });
});

const observeEsquerdo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("eentrou");
    }
  });
});

saiu_Cima.forEach((s) => {
  observerCima.observe(s);
});

saiu_baixo.forEach((s) => {
  observerCima.observe(s);
});

saiu_lado_esquerdo.forEach((s) => {
  observeEsquerdo.observe(s);
});

saiu_lado_direito.forEach((s) => {
  observeEsquerdo.observe(s);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header_Agencia_Marketing.classList.add("scrolled");
  } else {
    header_Agencia_Marketing.classList.remove("scrolled");
  }
});
