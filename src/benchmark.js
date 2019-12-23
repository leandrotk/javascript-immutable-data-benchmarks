const { performance } = require('perf_hooks');

const cycles = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000];

const benchmark = (immutableFn) => (cycles) => {
  const startTime = performance.now();
  benchmarkByCycle(cycles, immutableFn);
  const endTime = performance.now();
  const testTime = endTime - startTime;

  global.gc();

  return testTime;
};

const benchmarkByCycle = (cycles, immutableFn) => {
  for (let i = 0; i < cycles; i++) {
    immutableFn();
  }
}

exports.testBenchmark = (name, immutableFn) =>
  `${name},${cycles.map(benchmark(immutableFn)).join(',')}`;

exports.cycles = cycles;
