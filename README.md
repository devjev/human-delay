# Action Humanization

Execute actions with random, human-like delays. For cases when you need to simulate
human behavior. Assumes a Poisson random process with a low intensity to simulate random
yet believable arrival times.

#### Example 1
```ts
import { Behavior } from 'human-delay'

const casual = Behavior.casualCasey()

while (true) {
  await casual.do(() => {
    // Casually repeat the same action
  })  
}
```

#### Example 2
The `do(...)` method is variadic, so that all actions supplied to it are queued up
sequentially with random humanized delays between them.

```ts
import { Behavior } from 'human-delay'

const casey = Behavior.casualCasey()

await casey.do(
  () => { one() },
  () => { two() },
  () => { three() }
)
```

#### Default Behaviors

```ts
import { Behavior } from 'human-delay'

const
  lucy = Behavior.lethargicLucy(),      // very low intensity arrival times
  taniya = Behavior.thoughtfulTaniya(), // slow arrival times
  casey = Behavior.casualCasey(),       // casual, unfocused user behavior
  steve = Behavior.speedySteve(),       // impatient behavior
  ivan = Behavior.insaneIvan()          // very high intensity behavior
```
