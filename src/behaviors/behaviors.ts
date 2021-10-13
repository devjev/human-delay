import { createEntropy, Engine, MersenneTwister19937 } from 'random-js'
import { exponential } from '../simulations'
import sleep from 'sleep-promise'

export type Action = () => void

export class Behavior {
  private readonly exponentialIntensity: number
  private readonly seed: number[]
  private readonly engine: Engine

  private constructor(intensity: number) {
    this.exponentialIntensity = intensity
    this.seed = createEntropy()
    this.engine = MersenneTwister19937.seedWithArray(this.seed)
  }

  public async do(...actions: Action[]) {
    await this.doMultipleActions(actions)
  }

  async doSingleAction(action: Action) {
    const delay = exponential(this.exponentialIntensity, this.engine) * 1000
    const promise = sleep(delay).then(action)
    await promise
  }

  async doMultipleActions(actions: Action[]) {
    for (const action of actions) {
      await this.doSingleAction(action)
    }
  }

  static lethargicLucy(): Behavior {
    return new Behavior(0.005)
  }

  static thoughtfulTaniya(): Behavior {
    return new Behavior(0.085)
  }

  static casualCasey(): Behavior {
    return new Behavior(0.205)
  }

  static speedySteve(): Behavior {
    return new Behavior(0.445)
  }

  static insaneIvan(): Behavior {
    return new Behavior(0.755)
  }
}
