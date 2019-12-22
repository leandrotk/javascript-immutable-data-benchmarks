const ImmutableJs = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

// Native Object
exports.objectSetNative = (cycles) => {
  const obj = { value };
  for (let i = 0; i < cycles; i++) {
    const newValue = Math.random();
    Object.assign({}, obj, { value: newValue });
  }
};

// Immutable Object
exports.objectSetImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({ value });
  for (let i = 0; i < cycles; i++) {
    const newValue = Math.random();
    obj.set('value', newValue);
  }
};

// Native Array
exports.arraySetNative = (cycles) => {
  const arr = array;
  const maxIndex = arr.length - 1;
  for (let i = 0; i < cycles; i++) {
    const newArr = [].concat(arr);
    const index = ~~(Math.random() * maxIndex);
    const newVal = Math.random();
    newArr[index] = newVal;
  }
};

// Immutable Array
exports.arraySetImmutableJs = (cycles) => {
  const arr = ImmutableJs.fromJS(array);
  const maxIndex = arr.size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const newVal = Math.random();
    arr.set(index, newVal);
  }
};
