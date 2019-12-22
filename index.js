const fs = require('fs');
const { cycles, testBenchmark } = require('./src/benchmark');

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

const header = () => `Benchmark,${cycles.join(',')}`;

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
logAndSave(testBenchmark('[get] Object Native', objectGetNative));
logAndSave(testBenchmark('[get] Object Immutable.js', objectGetImmutableJs));
console.log();

// array get tests
logAndSave(testBenchmark('[get] Array Native', arrayGetNative));
logAndSave(testBenchmark('[get] Array Immutable.js', arrayGetImmutableJs));
console.log();

// object get in tests
logAndSave(testBenchmark('[get-in] Object Native', objectGetInNative));
logAndSave(testBenchmark('[get-in] Object Immutable.js', objectGetInImmutableJs));
console.log();

// array get in tests
logAndSave(testBenchmark('[get-in] Array Native', arrayGetInNative));
logAndSave(testBenchmark('[get-in] Array Immutable.js', arrayGetInImmutableJs));
console.log();

// object set tests
logAndSave(testBenchmark('[set] Object Native', objectSetNative));
logAndSave(testBenchmark('[set] Object Immutable.js set function', objectSet));
logAndSave(testBenchmark('[set] Object Immutable.js', objectSetImmutableJs));
console.log();

// array set tests
logAndSave(testBenchmark('[set] Array Native', arraySetNative));
logAndSave(testBenchmark('[set] Array Immutable.js set function', arraySet));
logAndSave(testBenchmark('[set] Array Immutable.js', arraySetImmutableJs));
console.log();

// object set-in tests
logAndSave(testBenchmark('[set-in] Object Native', objectSetInNative));
logAndSave(testBenchmark('[set-in] Object Immutable.js set-in function', objectImmutableSetFunction));
logAndSave(testBenchmark('[set-in] Object Immutable.js', objectSetInImmutableJs));
console.log();

// array set-in tests
logAndSave(testBenchmark('[set-in] Array Native', arraySetInNative));
logAndSave(testBenchmark('[set-in] Array Immutable.js set-in function', arraySetInImmutableFunction));
logAndSave(testBenchmark('[set-in] Array Immutable.js', arraySetInImmutableJs));
console.log();

// write to file
fs.writeFileSync('results.csv', results.join('\n'), 'utf8');

console.log('benchmarks done! Results saved to results.csv');
