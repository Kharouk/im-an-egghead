// Debugging compositions:
const {
  compose,
  map,
  split,
  join,
  lowerCase
} = require('./helper/shared');

const bookTitles = [
  'The Culture Code',
  'Designing Your Life',
  'Algorithms to Live By'
];

/*
 * Functional compositions are purposely opaque, and difficult to debug.
 * There is no obvious way to "visualize" the data as it transforms.
 * This is good when the function works as expected (harder to add bugs),
 * but challenging when the compositions are not correct,
 */

// What we need is a function that gives us a side-effect of being able to log out the current value:
const trace = msg => value => (console.log(msg, value), value); // prettier-ignore
//uses the comma operator :O on the left side is our action, and then after the comma, the value is what is returned.
const test = trace('test')(5); // runs console.log = test 5
console.log(test); // 5

const badSlugify = compose(
  join('-'),
  trace('after lowercase'), //
  map(lowerCase),
  trace('after split'), // [ [ 'The', 'Culture', 'Code' ]...
  map(split(' ')),
  trace('before split') // [ 'The Culture Code'...
);

// with compositions we work from right to left/bottom to top, so we add a trace at the bottom before the split

const slugify = compose(
  map(join('-')),
  trace('after split'),
  map(split(' ')),
  trace('after lowercase'),
  map(lowerCase),
  trace('before lowercase')
);

// let badSlugs = badSlugify(bookTitles); // returns a bug where it says str.toLowerCase is not a function; however we don't see what value it didn't like, where in the code, etc

let slugs = slugify(bookTitles);

console.info('SLUGS:', slugs); // SLUGS: [ 'the-culture-code', 'designing-your-life', 'algorithms-to-live-by' ]
