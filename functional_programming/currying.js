// Currying
// The act of refactoring a function so that it receives its arguments one at a time; the act of taking a function that usually has more than one argument and becomes a Higher Order Function.

const normalAdd = (x, y) => x + y;
console.log(normalAdd(5, 3)); // 8

// becomes:

function add(x) {
  return function(y) {
    return x + y;
  };
}
console.log(add(5, 6)); // returns [Function]
// this happens because the second variable is ignored and just returns the function on line 10

const addThree = add(3);

console.log(addThree.toString());
// function(y) {
//   return x + y;
// }

console.log(addThree(7)); // 10

// Every function in functional programming is curried like this

// Refactored we can do this:
const multiply = x => y => x * y;
const multiplyBy10 = multiply(10);
console.log(multiplyBy10(30)); // 300
console.log(multiplyBy10(-23)); // -230

// Arity -> the number of arguments a function receives
// Depending on the number it receives, there are specific words to describe these functions.
// 1 argument = unary
// 2 arguments = binary
// 3 arguments = ternary
// 4 arguments = quaternary
// Therefore currying is the act of taking multivariate functions and refactoring it into a series of unary functions.
