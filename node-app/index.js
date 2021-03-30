import { useState } from "react";

function Component() {
  const [count, changeTheCount] = useState(0);

  return <h1>Hello setState</h1>;
}
