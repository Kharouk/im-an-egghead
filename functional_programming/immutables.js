// Immutable Data

// Mutable - can be changed after creation
// Immutable - can't be changed after creation

const a = [1, 2, 3];
const b = a;
console.log(a === b); // true
b.push(4);
console.log(a); // [1,2,3,4]

// this is because a, b are not different arrays; they are identical. This can cause problems;

const c = { foo: 'bar' };
const d = c;
console.log(d === c); // true
d.foo = 'baz';
console.log(c); // { foo: 'baz' }

// again, not different objects. This breaks the purity of our functions. When we make updates to data, we want new data structures that takes the previous data, copies it, and then updates it.

// .push() is a mutation on an array; so lets create an immutable one:

const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
};

const e = [1, 2, 3];
const f = push(4)(e);
console.log(e); // [1,2,3] <- doesn't update the original array
console.log(f); // [1,2,3,4]
console.log(e === f); // False

// mutable vs immutable Classes
class MutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0);
    return this;
  }
}

const water = new MutableGlass('water', 500);
const drankWater = water.takeDrink(100);
console.log(drankWater); // MutableGlass { content: 'water', amount: 400
console.log(water === drankWater); // True (i thought they would be different) we handled this mutably.

class ImmutableGlass {
  constructor(content, amount) {
    this.content = content;
    this.amount = amount;
  }

  takeDrink(value) {
    return new ImmutableGlass(
      this.content,
      Math.max(this.amount - value, 0)
    );
  }
}

const beer = new ImmutableGlass('beer', 333);
const drankBeer = beer.takeDrink(300);
console.log(drankBeer); // ImmutableGlass { content: 'beer', amount: 33 }
console.log(beer); // ImmutableGlass { content: 'beer', amount: 333 }
console.log(beer === drankBeer); // false; new class!
