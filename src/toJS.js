const { fromJS } = require('immutable');

const immutableArray = fromJS([Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]);
const value = Math.random();
const immutableObject = fromJS({
  nested1: {
    nested2: {
      value
    }
  }
});

exports.objectToJS = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableObject.toJS();
  }
};

exports.arrayToJS = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableArray.toJS();
  }
};
