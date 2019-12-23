const {
  array,
  obj,
  immutableObj,
  immutableArray
} = require('./mocks');

// Native Object
exports.objectGetNative = () => obj.value;

// Immutable Object
exports.objectGetImmutableJs = () => immutableObj.get('value');

// Native Array
exports.arrayGetNative = () => {
  const maxIndex = array.length - 1;
  const index = ~~(Math.random() * maxIndex);
  array[index];
};

// Immutable Array
exports.arrayGetImmutableJs = () => {
  const maxIndex = immutableArray.size - 1;
  const index = ~~(Math.random() * maxIndex);
  immutableArray.get(index);
};
