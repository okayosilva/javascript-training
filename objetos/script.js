const people = {
  name: "Kayo",
  age: 22,
  showPeople() {
    return `Nome: ${this.name}, Idade: ${this.age}`;
  },
};

console.log(people.showPeople());
console.log(Math.PI);

people.isSoftwareEngineer = true;
people.name = people.name + " Silva";

console.log(people.showPeople());

const car = {
  price: 15000,
  brand: "Ford",
  year: 2018,
};

car.price = 20000;
console.log(car.price);

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

console.log(dog.bark("Homem"));
