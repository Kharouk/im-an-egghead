// Higher Order Functions:

// 1. Accepts a function as an argument;
// 2. Returns a new function;

const withCount = fn => {
  let count = 0;

  // the args we pass into countedAdd:
  return (...args) => {
    console.log(`Call count: ${++count}`);

    //then we pass those args into our function (add)
    console.log(fn(...args));

    // returns the number instead of undefined
    return fn(...args);
  };
};

const add = (x, y) => x + y;

const countedAdd = withCount(add);

console.log('what is countedAdd:', typeof countedAdd);

countedAdd(5, 3);
countedAdd(6, 3);
countedAdd(10, 3);
countedAdd(23, 3);
countedAdd(-1, 3);
