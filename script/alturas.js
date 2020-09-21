const img = document.querySelector("img");
const imgTop = img.offsetTop;
console.log(imgTop);

function somaImagens() {
  const imgAll = document.querySelectorAll("img");
  let soma = 0;
  imgAll.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, "Possui acessibilidade");
  } else {
    console.log(link, "Não possui boa acessibilidade");
  }
});

console.log(links);

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
