const selectorAllImages = document.querySelectorAll("img");

// selectorAllImages.forEach((image, index) => {
//   console.log(image, index);
// });

// const selectorAllImagesByName = Array.from(selectorAllImages).filter((image) =>
//   image.src.includes("imagem")
// );

// selectorAllImagesByName.forEach((image, index) => {
//   console.log(image, index);
// });

// const selectLinks = document.querySelectorAll("[href^='#']");
// selectLinks.forEach((link) => {
//   console.log(link.href);
// });

const selectorClasse = document.querySelector(".animais-descricao");
const selectorSubTitle = selectorClasse.querySelector("h2");
// console.log(selectorSubTitle);

const selectLastParagraph = document.querySelectorAll("p");
const queryParagraph = selectLastParagraph.length - 1

const lastParagraph = selectLastParagraph[queryParagraph];
console.log(lastParagraph.innerHTML);
