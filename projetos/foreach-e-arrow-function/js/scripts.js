// const showAllParagraphs = document.querySelectorAll("p");

// showAllParagraphs.forEach((paragraph) => console.log(paragraph));
// showAllParagraphs.forEach((paragraph) => console.log(paragraph.innerHTML));

const imgs = document.querySelectorAll("img");

imgs.forEach((image, index) => {
  console.log(image, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
console.log(i)