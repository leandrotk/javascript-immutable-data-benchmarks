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

exports.objectSetNative = (cycles) => {
  const obj = {value};
  for (let i = 0; i < cycles; i++) {
    const newValue = Math.random();
    Object.assign({}, obj, {value: newValue});
  }
};

exports.objectSetSeamlessImmutableJs = (cycles) => {
  const obj = seamlessImmutableJs.from({value});
  for (let i = 0; i < cycles; i++) {
    const newValue = Math.random();
    obj.set('value', newValue);
  }
};

exports.objectSetImmutableJs = (cycles) => {
  const obj = ImmutableJs.fromJS({value});
  for (let i = 0; i < cycles; i++) {
    const newValue = Math.random();
    obj.set('value', newValue);
  }
};

exports.objectSetMoriJs = (cycles) => {
  const obj = moriJs.hashMap('value', value);
  for (let i = 0; i < cycles; i++) {
    const newValue = Math.random();
    moriJs.assoc(obj, 'value', newValue);
  }
};

exports.objectSetCrio = (cycles) => {
  const obj = crio({value});
  for (let i = 0; i < cycles; i++) {
    const newValue = Math.random();
    obj.set('value', newValue);
  }
};

exports.arraySetNative = (cycles) => {
  const arr = array;
  const maxIndex = arr.length - 1;
  for (let i = 0; i < cycles; i++) {
    const newArr = [].concat(arr);
    const index = ~~(Math.random() * maxIndex);
    const newVal = Math.random();
    newArr[index] = newVal;
  }
};

exports.arraySetSeamlessImmutableJs = (cycles) => {
  const arr = seamlessImmutableJs.from(array);
  const maxIndex = arr.length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const newVal = Math.random();
    arr.set(index, newVal);
  }
};

exports.arraySetImmutableJs = (cycles) => {
  const arr = ImmutableJs.fromJS(array);
  const maxIndex = arr.size - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const newVal = Math.random();
    arr.set(index, newVal);
  }
};

exports.arraySetMoriJs = (cycles) => {
  const arr = moriJs.vector(...array);
  const maxIndex = moriJs.count(arr) - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const newVal = Math.random();
    moriJs.assoc(arr, index, newVal);
  }
};

exports.arraySetCrio = (cycles) => {
  const arr = crio(array);
  const maxIndex = arr.length - 1;
  for (let i = 0; i < cycles; i++) {
    const index = ~~(Math.random() * maxIndex);
    const newVal = Math.random();
    arr.set(index, newVal);
  }
};
