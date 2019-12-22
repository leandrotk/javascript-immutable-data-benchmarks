const ImmutableJs = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

// Native Object
exports.objectGetInNative = (cycles) => {
  const obj = {
    data: { value },
  };
  for (let i = 0; i < cycles; i++) {
    obj.data.value;
  }
};

// Immutable Object
exports.objectGetInImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({
    data: { value },
  });
  for (let i = 0; i < cycles; i++) {
    obj.getIn(['data', 'value']);
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
  const arr = ImmutableJs.fromJS([array]);
  const maxIndex = arr.get(0).size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    arr.getIn([0, index]);
  }
};
