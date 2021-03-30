# Let's Make Our _OWN_ Eslint RULES !! 🚀

## How does eslint READ the code?

- Abstract Syntax Tree 🌲: A tree data structure which let developer easier to parse the code
- Widely used in Babel and eslint
- [AST Explorer](https://astexplorer.net/)

## The goal of this sharing

Make a simple rule to lint the naming of `usetState`

```jsx
import { useState } from "react";

export function Component() {
  const [count, changeTheCount] = useState(0); // The setter name should be `setCount`

  return <h1>Hello setState</h1>;
}
```

## Reference

- [寫一個簡單堪用的 ESLint plugin](https://blog.techbridge.cc/2021/03/20/write-your-own-eslint-plugin/)
- [How To Write Your First ESLint Plugin](https://dev.to/spukas/how-to-write-your-first-eslint-plugin-145)
- [Eslint - Working with Rules](https://eslint.org/docs/developer-guide/working-with-rules)
