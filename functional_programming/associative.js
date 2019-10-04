// Associative Property

/**
 * Associative property is the mathematical principle that proves the
 * grouping of values in when adding or multiplying does not affect the result and applies it with functional composition.
 */

// these are all the same
1 + 2 + 3;
(1 + 2) + 3; // prettier-ignore
1 + (2 + 3);

const {
  compose,
  scream,
  exclaim,
  repeat
} = require('./helper/shared');

const withJoy = compose(
  repeat,
  scream,
  exclaim
);

const str = 'I love functional programming';

console.log(withJoy(str));

const repeatExcitedly = compose(
  repeat,
  exclaim
);

console.log(
  compose(
    repeatExcitedly,
    scream
  )(str)
); // this is what (1+2)+3 looks like; same result as the log above

// we add the second argument (str) when we dont save the first call to a function! so we just call it right away by adding the second parenthesis.

const screamLoudly = compose(
  exclaim,
  scream
);

console.log(
  compose(
    screamLoudly,
    repeat
  )(str)
); // this order repeats them first, then applies the screamLoudly stuff. argument order here matters. 1 + (2 + 3) if screamLoudly is 2nd argument (as it should be to match the original)
