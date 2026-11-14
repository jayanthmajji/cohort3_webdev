// hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use functions and variables before they are declared in the code.

console.log(x);
greet();
name();
name2();
var x = 5;

function greet() {
  // function declaration
  console.log("Hello");
}

var name = function () {
  // function expression
  console.log("My name is John");
};

var name2 = () => {
  // arrow function expression
  console.log("My name is jane");
};
