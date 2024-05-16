const menu = document.querySelector('.menu');
const menuCopy = menu.cloneNode(true);

const copySection = document.querySelector('.copy');

menuCopy.style.background = '#212ee0';
copySection.appendChild(menuCopy);

const faqList = document.querySelector('.faq-lista');

const firstQuestion = faqList.children[0]; 
// Pega o primeiro filho do elemento
// console.log(firstQuestion);

const secondQuestion = firstQuestion.nextElementSibling;
// console.log(secondQuestion)


const sectionFaq = document.querySelector('.faq');
const sectionAnimals = document.querySelector('.animais');

// sectionFaq.innerHTML = sectionAnimals.innerHTML;

// Move o elemento completo de faq para cima do primeiro filho de animais
// sectionAnimals.replaceChild(sectionFaq, sectionAnimals.children[0]); 