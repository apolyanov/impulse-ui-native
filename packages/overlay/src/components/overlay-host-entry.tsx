import { memo } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

import type { OverlayEntry, OverlayLifecycleStatus } from "../types";
import { useOverlayContext } from "../hooks";

interface OverlayHostEntryProps {
  entry: OverlayEntry;
  layer: number;
}

export const OverlayHostEntry = memo(function OverlayHostEntry({
  entry,
  layer,
}: OverlayHostEntryProps) {
  const { store } = useOverlayContext();

  const handleStatusChange = useEventCallback(
    (id: string, status: OverlayLifecycleStatus) => {
      store.setStatus(id, status);
      entry.onStatusChange?.(id, status);
    },
  );

  const handleCloseFinished = useEventCallback(() => {
    // Store cleanup is host-owned and must run even if the consumer callback throws.
    try {
      entry.onCloseFinished?.(entry.id);
    } finally {
      store.remove(entry.id);
    }
  });

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
      onStatusChange={handleStatusChange}
    >
      <entry.Content {...entry.contentProps} />
    </entry.Component>
  );
});
