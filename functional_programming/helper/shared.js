exports.compose = (...fns) => initialText =>
  fns.reduceRight((acc, fn) => fn(acc), initialText);
exports.split = pattern => str => str.split(pattern);
exports.join = separator => xs => xs.join(separator);
exports.scream = str => str.toUpperCase();
exports.exclaim = str => `${str}!`;
exports.repeat = str => `${str} ${str}`;
exports.lowerCase = str => str.toLowerCase();
exports.upperCase = str => str.toUpperCase();
exports.map = fn => array => array.map(fn);
