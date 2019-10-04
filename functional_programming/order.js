// Argument Order

/*
 * The order of arguments doesn't always matter, but it can matter
 * greatly when it comes to FP. Ordering yor arguments in a specific way
 * could allow the functions to benefit from partial application,
 * improve reusability, and enable composition of functions.
 */

const indifferentMap = (array, fn) => array.map(fn); // array or fn can be first, last, w/e

const map = array => cb => array.map(cb);

const arr = [1, 2, 3, 4, 5, 6, 7];
const double = n => n * 2;

const withArr = map(arr);

console.log(withArr(double));
// [2,4,6,8,10,12,14]

// However this doesn't give us extra utility than just calling the map method directly on the array.

// So if we change the argument order to receive the cb first and the array section, we could get much more utility from this curried function

const interestingMap = cb => array => array.map(cb);

const array = [1, 2, 3, 4, 5];

const withDouble = interestingMap(double);
console.log(withDouble(array)); // [ 2, 4, 6, 8, 10 ]

// Important: When ordering arguments in curried functions, go from:
// Most specific => least specific;

// the least specific is almost always the data; boolean, array, string, object, the primitives of the language

const prop = key => obj => obj[key];
const propName = prop('name');

const gold = [
  { name: 'Alex' },
  { name: 'James' },
  { name: 'John' },
  { name: 'Ricky' }
];

const goldNames = interestingMap(propName)(gold);

console.log(goldNames); // [ 'Alex', 'James', 'John', 'Ricky' ]
