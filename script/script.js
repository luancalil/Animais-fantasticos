const animais = document.getElementById("animais");

const gridSection = document.getElementsByClassName("grid-section");
console.log("grid-section");

const primeiraLI = document.querySelector("li");

const animaisImg = document.querySelectorAll("img");

const paragrafo = document.querySelectorAll("p");
const paragrafoArray = Array.from(paragrafo);

paragrafoArray.forEach((item) => {
  console.log(item);
});

paragrafoArray.forEach((item) => {
  console.log(item.innerText);
});

const menu = document.querySelectorAll(".menu a");

menu.forEach((item) => {
  item.classList.add("ativo");
});

menu.forEach((item) => {
  item.classList.remove("ativo");
});

menu[0].classList.add("ativo");

const imagem = document.querySelectorAll("img");

imagem.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

const link = document.querySelector("a[href^=https");
link.setAttribute("href", "https://www.github.com");
