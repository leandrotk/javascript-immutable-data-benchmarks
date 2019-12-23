const { immutableArray, immutableObj } = require('./mocks');

exports.objectToJS = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableObj.toJS();
  }
};

exports.arrayToJS = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableArray.toJS();
  }
};
