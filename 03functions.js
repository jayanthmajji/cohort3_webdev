// functions are the building blocks of JavaScript. A function is a set of statements that performs a task or calculates a value. Functions are executed when they are called (invoked).

function greet() {
  // function declaration
  console.log("Hello");
}

greet();

var add = function (num1, num2) {
  // function expression
  return num1 + num2;
};

console.log(add(2, 3));

var message = (name) => {
  // arrow function expression
  console.log("hello " + name);
};

message("jayanth");

// example
var x = 10;
a(2);
b(4);
console.log(x);

function a(num) {
  var ans = num * num;
  console.log(ans);
}

function b(n) {
  var result = n + n;
  console.log(result);
}
