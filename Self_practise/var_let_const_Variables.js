console.log("Use of var, let & const:");

var num = 8; //var ->  Declares a variable
{
    var num1 = "var";
    console.log(num1); 
}
console.log(num1);

let num2 = 5; //let ->	Declares a block variable
{
    let num2 = "let";
    console.log(num2); 
}
console.log(num2);

const num3 = 10; //const -> Declares a block constant
{
    const num3 = "const";
    console.log(num3); 
}
console.log(num3);
// num3 = "new"; //const value can be changed
// console.log(num3);
