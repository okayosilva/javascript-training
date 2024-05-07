let brazilCupVictoryYears = [1959, 1962, 1970, 1994, 2002];

brazilCupVictoryYears.forEach((year) => {
  let message = `O Brasil ganhou a copa de ${year}`;
  console.log(message);
});

let fruits = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Pera") {
    console.log(`${fruits[i]} é a minha fruta favorita`);
    break;
  }
}

let finalFruit = fruits[fruits.length - 1];
console.log(finalFruit);
