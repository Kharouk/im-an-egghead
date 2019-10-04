exports.compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x);

exports.scream = str => str.toUpperCase();
exports.exclaim = str => `${str}!`;
exports.repeat = str => `${str} ${str}`;
