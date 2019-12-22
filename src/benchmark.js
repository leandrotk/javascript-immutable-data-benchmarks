const cycles = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000];

const benchmark = (immutableFn) => (cycles) => {
  const startTime = Date.now();
  immutableFn(cycles);
  const testTime = Date.now() - startTime;

  global.gc();

  return testTime;
};

exports.testBenchmark = (name, immutableFn) =>
  `${name},${cycles.map(benchmark(immutableFn)).join(',')}`;

exports.cycles = cycles;
