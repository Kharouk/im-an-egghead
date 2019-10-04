exports.compose = (...fns) => initialText =>
  fns.reduceRight((acc, fn) => fn(acc), initialText);

exports.scream = str => str.toUpperCase();
exports.exclaim = str => `${str}!`;
exports.repeat = str => `${str} ${str}`;
