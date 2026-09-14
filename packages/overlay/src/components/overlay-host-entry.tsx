import { memo, useCallback } from "react";

import type { OverlayEntry } from "../types";
import { useOverlayContext } from "../hooks";

interface OverlayHostEntryProps {
  entry: OverlayEntry;
  layer: number;
}

export const OverlayHostEntry = memo(function OverlayHostEntry(
  props: OverlayHostEntryProps,
) {
  const { entry, layer } = props;
  const { store } = useOverlayContext();

  const handleCloseFinished = useCallback(() => {
    // Store cleanup is host-owned and must run even if the consumer callback throws.
    try {
      entry.onCloseFinished?.(entry.id);
    } finally {
      store.remove(entry.id);
    }
  }, [entry.id, entry.onCloseFinished, store]);

  return (
    <entry.Component
      id={entry.id}
      open={entry.open}
      layer={layer}
      title={entry.title}
      onOpen={entry.onOpen}
      onOpenFinished={entry.onOpenFinished}
      onClose={entry.onClose}
      onCloseFinished={handleCloseFinished}
    >
      <entry.Content {...entry.contentProps} />
    </entry.Component>
  );
});
