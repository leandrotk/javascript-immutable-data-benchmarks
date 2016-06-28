/* eslint no-unused-vars: 0 */
const seamlessImmutableJs = require('seamless-immutable');
const ImmutableJs = require('immutable');
const moriJs = require('mori');
const crio = require('crio').default;

/**
 * Data
 */

const value = Math.random();
const array = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

/**
 * Object
 */

exports.objectGetInNative = (cycles) => {
  const obj = {
    data: {value},
  };
  for (let i = 0; i < cycles; i++) {
    const val = obj.data.value;
  }
};

exports.objectGetInSeamlessImmutableJs = (cycles) => {
  const obj = seamlessImmutableJs.from({
    data: {value},
  });
  for (let i = 0; i < cycles; i++) {
    const val = obj.data.value;
  }
};

exports.objectGetInImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({
    data: {value},
  });
  for (let i = 0; i < cycles; i++) {
    const val = obj.getIn(['data', 'value']);
  }
};

exports.objectGetInMoriJs = (cycles) => {
  const obj = moriJs.hashMap('data', moriJs.hashMap('value', value));
  for (let i = 0; i < cycles; i++) {
    const val = moriJs.getIn(obj, ['data', 'value']);
  }
};

exports.objectGetInCrio = (cycles) => {
  const obj = crio({
    data: {value},
  });
  for (let i = 0; i < cycles; i++) {
    const val = obj.data.value;
  }
};

/**
 * Array
 */

exports.arrayGetInNative = (cycles) => {
  const arr = [array];
  const maxIndex = arr[0].length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr[0][index];
  }
};

exports.arrayGetInSeamlessImmutableJs = (cycles) => {
  const arr = seamlessImmutableJs.from([array]);
  const maxIndex = arr[0].length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr[0][index];
  }
};

exports.arrayGetInImmutableJs = (cycles) => {
  const arr = ImmutableJs.fromJS([array]);
  const maxIndex = arr.get(0).size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr.getIn([0, index]);
  }
};

exports.arrayGetInMoriJs = (cycles) => {
  const arr = moriJs.vector(moriJs.vector(...array));
  const maxIndex = moriJs.count(moriJs.get(arr, 0)) - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = moriJs.getIn(arr, [0, index]);
  }
};

exports.arrayGetInCrio = (cycles) => {
  const arr = crio([array]);
  const maxIndex = arr[0].length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const val = arr[0][index];
  }
};
