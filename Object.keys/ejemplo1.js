const object1 = {
  a: 'something',
  b: '45',
  c: false
};

console.log('Ejemplo 1:', Object.keys(object1));
// expected output: Array ["a", "b", "c"]

console.log('Ejemplo 2:', Object.values(object1));
// expected output: Array ['something'. '45', false]

const arr = ['a', 'b', 'c'];
console.log('Ejemplo 3:', Object.keys(arr)); // expected output: ['0', '1', '2']

// array-like object
const obj = { 
  0: 'a',
  1: 'b',
  2: 'c'
};
console.log('Ejemplo 4: ', Object.keys(obj)); // expected output: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log('Ejemplo 5: ', Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value() { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']