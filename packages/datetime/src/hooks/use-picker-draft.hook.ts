import { useEffect, useId, useMemo, useState } from "react";

import {
  useControllableState,
  useEventCallback,
  useIsOpen,
} from "@impulse-ui-native/core";

import type { PickerDraftOptions } from "../types/picker-draft.types";

export function usePickerDraft<Value>({
  value,
  defaultValue,
  onChange,
  normalize,
  onCloseSync,
}: PickerDraftOptions<Value>) {
  const id = useId();
  const [selected, setSelected] = useControllableState<Value | null>({
    prop: value,
    defaultProp: defaultValue ?? null,
    onChange,
  });
  const [draft, setDraft] = useState<Value | null>(selected);
  const { isOpen, isClosed, open, close, finishClose } = useIsOpen();

  const onPressOpen = useEventCallback(() => {
    setDraft(selected);
    open();
  });
  const onPressApply = useEventCallback(() => {
    setSelected(normalize ? normalize(draft) : draft);
    close();
  });
  const onPressClear = useEventCallback(() => {
    setDraft(null);
  });
  const syncState = useEventCallback(() => {
    setDraft(selected);
    onCloseSync?.(selected);
    finishClose();
  });

  useEffect(() => {
    if (!isOpen && isClosed) {
      setDraft(selected);
    }
  }, [isClosed, isOpen, selected]);

  return useMemo(
    () => ({
      id,
      isOpen,
      draft,
      selected,
      setDraft,
      setSelected,
      open,
      close,
      onPressOpen,
      onPressApply,
      onPressCancel: close,
      onPressClear,
      syncState,
    }),
    [
      close,
      draft,
      id,
      isOpen,
      onPressApply,
      onPressClear,
      onPressOpen,
      open,
      selected,
      setSelected,
      syncState,
    ],
  );
}
