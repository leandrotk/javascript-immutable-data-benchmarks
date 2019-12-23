const {
  nestedArray,
  obj,
  immutableObj,
  immutableArray
} = require('./mocks');

// Native Object
exports.objectGetInNative = () => obj.nested1.nested2.value;

// Immutable Object
exports.objectGetInImmutableJs = () => immutableObj.getIn(['nested1', 'nested2', 'value']);

// Native Array
exports.arrayGetInNative = () => {
  const maxIndex = nestedArray[0].length - 1;
  const index = ~~(Math.random() * maxIndex);
  nestedArray[0][index];
};

// Immutable Array
exports.arrayGetInImmutableJs = () => {
  const maxIndex = immutableArray.get(0).size - 1;
  const index = ~~(Math.random() * maxIndex);
  immutableArray.getIn([0, index]);
};
