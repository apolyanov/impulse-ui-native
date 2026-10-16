# Code readability

- Keep complex expressions above the JSX they support. Give compound render
  conditions, nested ternaries, nontrivial calculations, and computed prop values
  descriptive local names so the JSX communicates structure and intent.
- For values that depend on a mapped item, use a block-bodied callback and declare
  the values before that callback's JSX return. Keep expressions in the narrowest
  scope that owns their inputs and preserve conditional evaluation and narrowing.
- Simple bindings, property access, ordinary prop defaults, and straightforward
  render ternaries may remain inline. Do not add memoization for primitive values
  just to move an expression out of JSX.
- Apply this convention throughout packages, apps, examples, and stories.
