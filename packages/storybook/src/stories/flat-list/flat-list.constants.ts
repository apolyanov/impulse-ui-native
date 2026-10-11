export const FlatListExampleItems = Array.from({ length: 80 }, (_, index) => ({
  id: String(index),
  label:
    index % 3 === 0
      ? `Option ${index}: This longer label is truncated to one line in the fixed-height Select row. `.repeat(
          3,
        )
      : `Option ${index}`,
}));

export const FlatListExampleTarget = 60;
