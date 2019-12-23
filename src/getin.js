const {
  array,
  nestedArray,
  obj,
  immutableObj,
  immutableArray
} = require('./mocks');

// Native Object
exports.objectGetInNative = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    obj.nested1.nested2.value;
  }
};

// Immutable Object
exports.objectGetInImmutableJs = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableObj.getIn(['nested1', 'nested2', 'value']);
  }
};

// Native Array
exports.arrayGetInNative = (cycles) => {
  const maxIndex = nestedArray[0].length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    nestedArray[0][index];
  }
};

// Immutable Array
exports.arrayGetInImmutableJs = (cycles) => {
  const maxIndex = immutableArray.get(0).size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    immutableArray.getIn([0, index]);
  }
};
