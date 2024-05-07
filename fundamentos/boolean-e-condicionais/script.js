let myAge = 22;
let parentAge = 45;

if (myAge > parentAge) {
  console.log("Eu sou mais velho(a) que meus pais");
} else if (myAge === parentAge) {
  console.log("Eu tenho a mesma idade que meus pais");
} else {
  console.log("Eu sou mais novo(a) que meus pais");
}

let expression = 5 - 2 && 5 - " " && 5 - 2;
console.log(expression);

let name = "Kayo", // true
  age = 22, // true
  haveDoctorateDegree = false, // false
  futureProfession, // false
  moneySaved = 0; // false

// O operador !! transforma o valor em booleano
console.log(!!name, !!age, !!haveDoctorateDegree, !!futureProfession, !!moneySaved);

// O operador ! inverte o valor
console.log(!age)

let brasil = 207,
  china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes que a China");
} else {
  console.log("Brasil não tem mais habitantes que a China");
}

if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
