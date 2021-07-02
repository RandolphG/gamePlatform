import { useEffect } from "react";
import sync from "framesync";
import { useMotionValue, MotionValue } from "framer-motion";

/**
 *  Combine multiple motion values into a new one using a template literal.
 *
 *  Updates in source motion values are batched to once per frame.
 *
 *  ```javascript
 *  const x = useMotionValue(0)
 *  const y = useMotionValue(0)
 *
 *  const transform = useMotionTemplate`translate(${x}px ${y}px)`
 *  ```
 */
export function useMotionTemplate(fragments: any, ...values: any) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;

    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) output += values[i].get();
    }

    return output;
  }

  const value = useMotionValue(buildValue());

  const updateValue = () => value.set(buildValue());

  useSubscriptions(values, () => sync.update(updateValue, false, true));

  return value;
}

function useSubscriptions(values: any, handler: any) {
  useEffect(() => {
    const subscriptions = values.map((value: any) => value.onChange(handler));

    return () => subscriptions.forEach((unsubscribe: any) => unsubscribe());
  });
}
