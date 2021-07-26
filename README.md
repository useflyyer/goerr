# @flyyer/goerr

Internal utility function.

```sh
yarn add @flyyer/goerr
```

```ts
import { goerr } from "@flyyer/goerr";


const [res, error] = await goerr(fetch("..."));
if (error) {
  //...
} else if (res) {
  //...
} else {
  // Never will return both values.
}
```
