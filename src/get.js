const { fromJS } = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const immutableArray = fromJS(array);
const obj = { value };
const immutableObj = fromJS(obj);

// Native Object
exports.objectGetNative = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    obj.value;
  }
};

// Immutable Object
exports.objectGetImmutableJs = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableObj.get('value');
  }
};

// Native Array
exports.arrayGetNative = (cycles) => {
  const maxIndex = array.length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    array[index];
  }
};

// Immutable Array
exports.arrayGetImmutableJs = (cycles) => {
  const maxIndex = immutableArray.size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    immutableArray.get(index);
  }
};
