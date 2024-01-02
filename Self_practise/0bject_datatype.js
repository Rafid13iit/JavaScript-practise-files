// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log(person);
console.log(cars);
console.log(date);


// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const human = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    eyeColor : "Blue",
    age      : 50,
    fullName : function() {
      return this.firstName + " " + this.lastName + "'s id is : " + this.id;
    }
  };
console.log(human.firstName);
console.log(human.eyeColor);
console.log(human["age"]);
console.log(human.fullName());