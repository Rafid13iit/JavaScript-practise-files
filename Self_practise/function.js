function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
  
var value = toCelsius;
var value1 = toCelsius(98.4);

console.log(value);
//Accessing a function without () returns the function and not the function result

console.log(value1);