const { set } = require('immutable');

const {
  array,
  immutableArray,
  obj,
  immutableObj
} = require('./mocks');

// Native Object
exports.objectSetNative = () => {
  const newObj = {
    ...obj,
    ...{ value: Math.random() }
  };
};

// Native Object with set immutable (https://immutable-js.github.io/immutable-js/docs/#/set)
exports.objectSet = () => set(obj, 'value', Math.random()); // returns an immutable

// Immutable Object
exports.objectSetImmutableJs = () => {
  const newObj = immutableObj.set('value', Math.random());
};

// Native Array
exports.arraySetNative = () => {
  const maxIndex = array.length - 1;
  const newArr = [...array];
  const index = ~~(Math.random() * maxIndex);
  newArr[index] = Math.random();
};

// Array set function
exports.arraySet = () => {
  const maxIndex = array.length - 1;
  const index = ~~(Math.random() * maxIndex);
  set(array, index, Math.random());
};

// Immutable Array
exports.arraySetImmutableJs = () => {
  const maxIndex = immutableArray.size - 1;
  const index = ~~(Math.random() * maxIndex);
  immutableArray.set(index, Math.random());
};
