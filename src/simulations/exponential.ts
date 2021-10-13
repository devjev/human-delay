import {
  createEntropy,
  MersenneTwister19937,
  Engine,
  real as simulateRealUniform
} from 'random-js'

export function invertedExponentialCDF(u: number, intensity: number): number {
  return -1 * Math.log(1 - u) / intensity
}

export function exponential(intensity: number, engine?: Engine): number {
  const engine_ = engine ?? MersenneTwister19937.seedWithArray(createEntropy())
  const u = simulateRealUniform(0, 1, true)(engine_)
  return invertedExponentialCDF(u, intensity)
}
