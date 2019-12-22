const { fromJS, set } = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const immutableArray = fromJS(array);
const obj = { value };
const immutableObj = fromJS(obj);

// Native Object
exports.objectSetNative = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    const newObj = {
      ...obj,
      ...{ value: Math.random() }
    };
  }
};

// Native Object with set immutable (https://immutable-js.github.io/immutable-js/docs/#/set)
exports.objectSet = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    set(obj, 'value', Math.random()); // returns an immutable
  }
};

// Immutable Object
exports.objectSetImmutableJs = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    const newObj = immutableObj.set('value', Math.random());
  }
};

// Native Array
exports.arraySetNative = (cycles) => {
  const maxIndex = array.length - 1;
  for (let i = 0; i < cycles; i++) {
    const newArr = [...array];
    const index = ~~(Math.random() * maxIndex);
    newArr[index] = Math.random();
  }
};

// Array set function
exports.arraySet = (cycles) => {
  const maxIndex = array.length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    set(array, index, Math.random());
  }
};

// Immutable Array
exports.arraySetImmutableJs = (cycles) => {
  const maxIndex = immutableArray.size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    immutableArray.set(index, Math.random());
  }
};
