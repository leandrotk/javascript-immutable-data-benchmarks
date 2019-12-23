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
exports.objectSetInNative = () => {
  const newObj = {
    ...obj,
    data: {
      ...obj.data,
      value
    }
  };
};

// Object immutable set function
exports.objectImmutableSetFunction = () => setIn(obj, ['data', 'value'], Math.random());

// Immutable Object
exports.objectSetInImmutableJs = () => immutableObj.setIn(['data', 'value'], Math.random());

// Native Array
exports.arraySetInNative = () => {
  const newArr = [
    [
      Math.random(),
      ...array,
    ]
  ];
};

// Array immutable set-in function
exports.arraySetInImmutableFunction = () => setIn(nestedArray, [0, 0], Math.random());

// Immutable Array
exports.arraySetInImmutableJs = () => immutableNestedArray.setIn([0, 0], Math.random());
