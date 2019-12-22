const ImmutableJs = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

// Native Object
exports.objectGetNative = (cycles) => {
  const obj = { value };
  for (let i = 0; i < cycles; i++) {
    obj.value;
  }
};

// Immutable Object
exports.objectGetImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({ value });
  for (let i = 0; i < cycles; i++) {
    obj.get('value');
  }
};

// Native Array
exports.arrayGetNative = (cycles) => {
  const arr = array;
  const maxIndex = arr.length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    arr[index];
  }
};

// Immutable Array
exports.arrayGetImmutableJs = (cycles) => {
  const arr = ImmutableJs.fromJS(array);
  const maxIndex = arr.size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    arr.get(index);
  }
};
