const { fromJS } = require('immutable');
const { array, obj } = require('./mocks');

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
