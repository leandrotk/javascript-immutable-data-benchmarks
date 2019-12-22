const fs = require('fs');
const { repeats, test } = require('./src/test');

const {
  objectGetNative,
  objectGetImmutableJs,
  arrayGetNative,
  arrayGetImmutableJs,
} = require('./src/get');

const {
  objectGetInNative,
  objectGetInImmutableJs,
  arrayGetInNative,
  arrayGetInImmutableJs,
} = require('./src/getin');

const {
  objectSetNative,
  objectSetImmutableJs,
  objectSet,
  arraySetNative,
  arraySet,
  arraySetImmutableJs,
} = require('./src/set');

const {
  objectSetInNative,
  objectSetInImmutableJs,
  objectImmutableSetFunction,
  arraySetInNative,
  arraySetInImmutableJs,
  arraySetInImmutableFunction,
} = require('./src/setin');

const header = () => `Benchmark,${repeats.join(',')}`;

console.log('starting benchmarks...');

const results = [];
const logAndSave = (it) => {
  results.push(it);
  console.log(it);
};

// header
logAndSave(header());
console.log();

// object get tests
logAndSave(test('[get] Object Native', objectGetNative));
logAndSave(test('[get] Object Immutable.js', objectGetImmutableJs));
console.log();

// array get tests
logAndSave(test('[get] Array Native', arrayGetNative));
logAndSave(test('[get] Array Immutable.js', arrayGetImmutableJs));
console.log();

// object get in tests
logAndSave(test('[get-in] Object Native', objectGetInNative));
logAndSave(test('[get-in] Object Immutable.js', objectGetInImmutableJs));
console.log();

// array get in tests
logAndSave(test('[get-in] Array Native', arrayGetInNative));
logAndSave(test('[get-in] Array Immutable.js', arrayGetInImmutableJs));
console.log();

// object set tests
logAndSave(test('[set] Object Native', objectSetNative));
logAndSave(test('[set] Object Immutable.js set function', objectSet));
logAndSave(test('[set] Object Immutable.js', objectSetImmutableJs));
console.log();

// array set tests
logAndSave(test('[set] Array Native', arraySetNative));
logAndSave(test('[set] Array Immutable.js set function', arraySet));
logAndSave(test('[set] Array Immutable.js', arraySetImmutableJs));
console.log();

// object set-in tests
logAndSave(test('[set-in] Object Native', objectSetInNative));
logAndSave(test('[set-in] Object Immutable.js set-in function', objectImmutableSetFunction));
logAndSave(test('[set-in] Object Immutable.js', objectSetInImmutableJs));
console.log();

// array set-in tests
logAndSave(test('[set-in] Array Native', arraySetInNative));
logAndSave(test('[set-in] Array Immutable.js set-in function', arraySetInImmutableFunction));
logAndSave(test('[set-in] Array Immutable.js', arraySetInImmutableJs));
console.log();

// write to file
fs.writeFileSync('results.csv', results.join('\n'), 'utf8');

console.log('benchmarks done! Results saved to results.csv');
