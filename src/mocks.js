const { fromJS } = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const nestedArray = [array];
const obj = {
  nested1: {
    nested2: {
      value
    }
  }
};

exports.array = array;
exports.value = value;
exports.obj = obj;

exports.immutableArray = fromJS(array);
exports.immutableObj = fromJS(obj);
exports.nestedArray = nestedArray;
exports.immutableNestedArray = fromJS(nestedArray);
