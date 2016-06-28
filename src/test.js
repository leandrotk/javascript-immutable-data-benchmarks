const repeats = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000];

exports.test = (name, benchmark) => `${name},${repeats.map(cycles => {
  const startTime = Date.now();
  benchmark(cycles);
  const testTime = Date.now() - startTime;
  global.gc();
  return testTime;
}).join(',')}`;

exports.repeats = repeats;
