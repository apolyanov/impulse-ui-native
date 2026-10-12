import { useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

import type {
  ColorInputDraft,
  ColorInputOptions,
} from "../types/color-input.types";

export function useColorInput({
  value,
  disabled,
  commit,
  resetKey,
}: ColorInputOptions) {
  const [draft, setDraft] = useState<ColorInputDraft>();
  const currentDraft =
    draft?.base === value && draft.resetKey === resetKey ? draft : undefined;
  const text = currentDraft?.text ?? value;
  const invalid = currentDraft?.invalid === true;

  const onChangeText = useEventCallback((next: string) => {
    if (disabled) {
      return;
    }

    const nextValue = commit(next);
    setDraft({
      base: nextValue ?? value,
      text: next,
      invalid: false,
      resetKey,
    });
  });
  const onCommit = useEventCallback(() => {
    if (disabled || !currentDraft) {
      return;
    }

    if (commit(text) !== undefined) {
      setDraft(undefined);
    } else {
      setDraft({ base: value, text, invalid: true, resetKey });
    }
  });

  if (draft !== undefined && currentDraft === undefined) {
    setDraft(undefined);
  }

  return { text, invalid, onChangeText, onCommit };
}
