class person {
    constructor(fName, lName, age){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }

    fullName () {
        // return this.firstName + " " + this.lastName + "'s age is : " + this.age;
        return `${this.firstName} ${this.lastName}'s age is ${this.age}`;
      }
};

let person1 = new person("Rafid", "Islam", 23);
let person2 = new person("MD", "Boss", 24);

console.log(person1.fullName())
console.log(person2.fullName())