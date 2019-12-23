const { fromJS } = require('immutable');

const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const value = Math.random();
const obj = {
  nested1: {
    nested2: {
      value
    }
  }
};

exports.objectFromJS = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    fromJS(obj);
  }
};

exports.arrayFromJS = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    fromJS(array);
  }
};
