const { setIn } = require('immutable');

const {
  value,
  array,
  obj,
  immutableObj,
  nestedArray,
  immutableNestedArray
} = require('./mocks');

// Native Object
exports.objectSetInNative = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    const newObj = {
      ...obj,
      data: {
        ...obj.data,
        value
      }
    };
  }
};

// Object immutable set function
exports.objectImmutableSetFunction = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    setIn(obj, ['data', 'value'], Math.random());
  }
};

// Immutable Object
exports.objectSetInImmutableJs = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableObj.setIn(['data', 'value'], Math.random());
  }
};

// Native Array
exports.arraySetInNative = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    const newArr = [
      [
        Math.random(),
        ...array,
      ]
    ];
  }
};

// Array immutable set-in function
exports.arraySetInImmutableFunction = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    setIn(nestedArray, [0, 0], Math.random());
  }
};

// Immutable Array
exports.arraySetInImmutableJs = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableNestedArray.setIn([0, 0], Math.random());
  }
};
