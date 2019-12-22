const ImmutableJs = require('immutable');

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

// Native Object
exports.objectSetInNative = (cycles) => {
  const obj = {
    data: { value },
  };
  for (let i = 0; i < cycles; i++) {
    Object.assign({}, obj, {
      data: Object.assign({}, obj.data, {
        value: Math.random(),
      }),
    });
  }
};

// Immutable Object
exports.objectSetInImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({
    data: { value },
  });
  for (let i = 0; i < cycles; i++) {
    obj.setIn(['data', 'value'], Math.random());
  }
};

// Native Array
exports.arraySetInNative = (cycles) => {
  const arr = [array];
  const maxIndex = arr[0].length - 1;
  for (let i = 0; i < cycles; i++) {
    const newArr = [].concat(arr);
    newArr[0] = [].concat(arr[0]);
    const index = ~~(Math.random() * maxIndex);
    newArr[0][index] = Math.random();
  }
};

// Immutable Array
exports.arraySetInImmutableJs = (cycles) => {
  const arr = ImmutableJs.fromJS([array]);
  const maxIndex = arr.get(0).size - 1;
  for (let i = 0; i < cycles; i++) {
    arr.setIn([0, ~~(Math.random() * maxIndex)], Math.random());
  }
};
