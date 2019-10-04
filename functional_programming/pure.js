// Pure Functions
// Doesn't interact with anything outside itself, it only works with what you pass in as arguments. It causes no side effects in the application or "outside world".

const f = x => x + 1;
// obvious, you pass in the number and interacts inside with the 1 and returns the output

// Impure functions //
// Example - Global State:
const COST_OF_ITEM = 19;
const cartTotal = quantity => COST_OF_ITEM * quantity;
// this is an impure function, even though we always get the same output based on the same input. However, since cost_of_item can be changed from the outside, it will alter what cartTotal will return.

// Example 2 - Same input, different output
const generateID = () => Math.floor(Math.random() * 10000);
console.log(generateID()); // 2473
console.log(generateID()); // 6822

const createUser = (name, age) => ({
  id: generateID(),
  name,
  age
});

console.log(createUser('Alex', 24));
console.log(createUser('Alex', 24));
console.log(createUser('Alex', 24));
// all have different ids (obvious); but this makes our factory function impure, which can be a no-no.

// To fix this, we can move the impure function outside of the factory and call it somewhere wehre we're expecting the side effect to happen, and pass the ID as a parameter into the `createUser` factory function

// Example - Side Effects #1
let id = 0;
// if we have a function that mutates the id, it is an impure function
const createFoodItem = name => ({
  id: ++id,
  name
});

console.log(createFoodItem('pizza'));
console.log(createFoodItem('salad'));
console.log(createFoodItem('toast'));
console.log(createFoodItem('cheese'));
console.log(id); // is now mutated and not like its original self :(

// Example - Side Effects #2 - Outside World
// console.log() is an impure function! It creates a side effect in the outside world. It affects the terminal. Any function that uses console.log renders it impure as well.
