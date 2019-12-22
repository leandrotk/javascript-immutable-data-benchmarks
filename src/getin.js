const { fromJS } = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
const immutableArray = fromJS([array]);
const obj = { data: { value } };
const immutableObj = fromJS(obj);

// Native Object
exports.objectGetInNative = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    obj.data.value;
  }
};

// Immutable Object
exports.objectGetInImmutableJs = (cycles) => {
  for (let i = 0; i < cycles; i++) {
    immutableObj.getIn(['data', 'value']);
  }
};

// Native Array
exports.arrayGetInNative = (cycles) => {
  const arr = [array];
  const maxIndex = arr[0].length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    arr[0][index];
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
