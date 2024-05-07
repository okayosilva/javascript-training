function helloWorld() {
  console.log("Hello World!");
}

helloWorld();

addEventListener("click", () => {
  console.log("Clicou");
});

const calcImc = (peso, altura) => {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
};

calcImc(85, 1.8);

function oldAge(age) {
  if (typeof age !== "number") {
    return "Por favor, informe um número válido!";
  }

  if (age >= 60) {
    return "Você é idoso!";
  } else {
    return "Você não é idoso!";
  }
}

console.log(oldAge(60));
console.log(oldAge(30));
console.log(oldAge("30"));

// function userData() {
//   let name = "Kayo",
//     age = 22;

//   function showUserData() {
//     return `Nome: ${name}, Idade: ${age}`;
//   }

//   return showUserData();
// }

// console.log(userData());

// Refactoring

function showUserData(name, age) {
  return `Nome: ${name}, Idade: ${age}`;
}

function userData() {
  let name = "Kayo",
    age = 22;

  return showUserData(name, age);
}

console.log(userData());

// Crie uma função para verificar se um valor é Truthy

function isTruthy(value) {
  return !!value; // !! força a conversão para boolean
}
console.log(isTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calculateArea(sideLength) {
  const area = sideLength * 4;
  return area;
}

console.log(calculateArea(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function showFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(showFullName("Kayo", "Silva"));

// Crie uma função que verifica se um número é par

function isPair(num) {
  let remainingValue = num % 2;
  if (remainingValue === 0) {
    return "É par";
  }

  if (remainingValue % 2 !== 0) {
    return "É ímpar";
  }
}

console.log(isPair(10));
console.log(isPair(11));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function showTypeOfData(data) {
  const type = typeof data;
  return type;
}

console.log(showTypeOfData(() => {}));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", () => {
  console.log("Scrollou");
});

function countriesToVisit(totalCountries, visitedCountries) {
  const needToVisit = totalCountries - visitedCountries;
  return `Still need to visit ${needToVisit} countries.`;
}

function countriesVisited(totalCountries, visitedCountries) {
  return `Already visited ${visitedCountries} out of ${totalCountries} countries.`;
}

const totalCountries = 193;

console.log(countriesToVisit(totalCountries, 20));
console.log(countriesVisited(totalCountries, 20));
