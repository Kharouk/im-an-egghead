// Pointfree Programming

// Where you pass a named function as an argument to avoid writing an anonymous function with interim variables instead

// Increases code legibility, decrease the surface area for bugs, and makes our code more composable and unit testable.

const array = [1, 2, 3];

array.map(x => x * 2);
// This works, but this could lead to bugs. x acts as an interim variable, and doesn't tell us much about the data.
const double = x => x * 2;
const doubledArray = array.map(double);

console.log(doubledArray); // [2,4,6]
