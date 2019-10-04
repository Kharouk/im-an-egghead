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
