// Composition
/*
 * It is the heart and soul of functional programming
 * It is how we build our applications
 */

/*
 * Composition is about building up complex functionality by
 * combining simpler functions.
 *
 * In a sense, it's the nesting of functions, passing the result of one
 * in as the input into the next.
 */

const add = x => x + 2;
const mult = x => x * 3;

console.log(add(mult(5))); // 17 <- however we are seeing nesting here, and it doesn't read well so code legibility here is bad.

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;
const quote = 'Functional Programming is great';

console.log(repeat(exclaim(scream(quote)))); // another example of composition but still has nesting

// Let's create a HOF:
const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

withExuberance = compose(
  repeat,
  exclaim,
  scream
);

console.log(withExuberance(quote));

// some libraries have this or similar, like Lodash FP, and they have something called `pipe`, which is just the reverse of our compose.

const pipe = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x);

const withPipedExuberance = pipe(
  scream,
  exclaim,
  repeat
);

console.log(withPipedExuberance(quote));
//FUNCTIONAL PROGRAMMING IS GREAT! FUNCTIONAL PROGRAMMING IS GREAT!
