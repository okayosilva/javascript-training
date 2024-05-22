function peaple(inputName, inputAge) {
  this.name = inputName;
  this.age = inputAge;
  this.toWalk = () => {
    console.log(`${this.name} is walking`);
  };
}

const person1 = new peaple("Kayo", 22);
const person2 = new peaple("Maria", 21);
const person3 = new peaple("Davi", 1);
console.log(person1);
console.log(person2);
console.log(person3);
person1.toWalk();

function Dom(selector) {
  this.elements = function () {
    return document.querySelectorAll(selector);
  };
  this.addClass = function (classSelected) {
    this.elements().forEach((element) => {
      element.classList.add(classSelected);
    });
  };
  this.removeClass = function (classSelected) {
    this.elements().forEach((element) => {
      element.classList.remove(classSelected);
    });
  };
}

const li = new Dom("li");
li.addClass("active");
li.removeClass("active");
console.log(li.elements());
