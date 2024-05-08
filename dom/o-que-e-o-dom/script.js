const page = window.location.href;
const currentPage = "http://127.0.0.1:5500/dom/o-que-e-o-dom/index.html";

if (page.includes(currentPage)) console.log("Estamos na página correta");

const activeTag = document.querySelector(".active");
console.log(activeTag.innerText);

const language = window.navigator.language;
console.log(language);

const width = window.innerWidth;
console.log(width);

const height = window.innerHeight;
console.log(height);
