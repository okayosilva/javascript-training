const people = {
  name: "Kayo",
  age: 22,
  showPeople() {
    return `Nome: ${this.name}, Idade: ${this.age}`;
  },
};

// console.log(people.showPeople());
// console.log(Math.PI);

people.isSoftwareEngineer = true;
people.name = people.name + " Silva";

// console.log(people.showPeople());

const car = {
  price: 15000,
  brand: "Ford",
  year: 2018,
};

car.price = 20000;
// console.log(car.price);

const dog = {
  name: "Bob",
  age: 3,
  breed: "Labrador",
  color: "black",
  bark(sawAPerson) {
    if (sawAPerson === "Homem") {
      return "Au! Au!";
    }
  },
};

// console.log(dog.bark("Homem"));

//Query Selector é um método que retorna o primeiro elemento que combina com o seletor CSS especificado.
// const clickButton = document.querySelector(".btn");

// clickButton.addEventListener("click", () => {
//   console.log("Clicou");
// });

// classList é uma propriedade somente leitura que retorna uma coleção ativa de DOMTokenList dos atributos de classe do elemento. - Retorna os valores das classes do elemento
// console.log(clickButton.classList);

// add() Adiciona um ou mais valores de classe especificados. Se a classe especificada já existir, a classe não será adicionada.

// clickButton.classList.add("active");
// console.log(clickButton.classList);

let arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayList.map((item) => {
  // console.log(item);
});

arrayList.splice(9, 1);
// console.log(arrayList);

// console.log(arrayList.slice(4, 9));
// console.log(arrayList.length);

const content = document.querySelector(".content");
const formContent = document.querySelector(".form-content");
const title = document.querySelector(".title");
const paragraph = document.querySelector(".paragraph");
const inputName = document.querySelector(".name");

content.style.display = "flex";
formContent.style.backgroundColor = "blue";
title.innerHTML = "Olá, Mundo!";
paragraph.textContent = "Seja bem-vindo ao meu site!";
