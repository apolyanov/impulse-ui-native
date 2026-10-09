import { useEffect, useMemo, useRef, useState } from "react";

import { useEventCallback } from "@impulse-ui-native/core";

import type {
  OverlayLifecycle,
  OverlayLifecycleOptions,
  OverlayLifecycleProps,
  OverlayLifecycleStatus,
} from "../types";

export function useOverlayLifecycle(
  {
    id,
    open = false,
    onOpen,
    onOpenFinished,
    onClose,
    onCloseFinished,
    onStatusChange,
  }: OverlayLifecycleProps,
  { ready = true, onEnter, onExit }: OverlayLifecycleOptions = {},
): OverlayLifecycle {
  const [status, setStatus] = useState<OverlayLifecycleStatus>(
    open ? "opening" : "closed",
  );

  const currentStatus = useRef<OverlayLifecycleStatus>("closed");
  const transitionId = useRef(0);
  const animationStarted = useRef(false);

  const completeTransition = useEventCallback(
    (completedTransitionId: number) => {
      if (transitionId.current !== completedTransitionId) {
        return;
      }

      const previousStatus = currentStatus.current;

      if (previousStatus !== "opening" && previousStatus !== "closing") {
        return;
      }

      const nextStatus = previousStatus === "opening" ? "open" : "closed";
      transitionId.current += 1;
      animationStarted.current = false;
      currentStatus.current = nextStatus;
      setStatus(nextStatus);

      try {
        onStatusChange?.(id, nextStatus);
      } finally {
        if (nextStatus === "open") {
          onOpenFinished?.(id);
        } else {
          onCloseFinished?.(id);
        }
      }
    },
  );

  const startAnimation = useEventCallback(() => {
    const phase = currentStatus.current;

    if (
      animationStarted.current ||
      (phase !== "opening" && phase !== "closing")
    ) {
      return;
    }

    if (phase === "opening" && !ready) {
      return;
    }

    animationStarted.current = true;
    const handler = phase === "opening" ? onEnter : onExit;
    const activeTransitionId = transitionId.current;

    if (handler) {
      handler(activeTransitionId, completeTransition);
    } else {
      completeTransition(activeTransitionId);
    }
  });

  const show = useEventCallback(() => {
    if (currentStatus.current === "open") {
      return;
    }

    if (currentStatus.current === "opening") {
      startAnimation();

      return;
    }

    transitionId.current += 1;
    animationStarted.current = false;
    currentStatus.current = "opening";
    setStatus("opening");

    try {
      try {
        onStatusChange?.(id, "opening");
      } finally {
        onOpen?.(id);
      }
    } finally {
      startAnimation();
    }
  });

  const close = useEventCallback(() => {
    if (currentStatus.current === "closed") {
      return;
    }

    if (currentStatus.current === "closing") {
      startAnimation();

      return;
    }

    transitionId.current += 1;
    animationStarted.current = false;
    currentStatus.current = "closing";
    setStatus("closing");

    try {
      try {
        onStatusChange?.(id, "closing");
      } finally {
        onClose?.(id);
      }
    } finally {
      startAnimation();
    }
  });

  useEffect(() => {
    if (open) {
      show();
    } else {
      close();
    }
  }, [open, show, close]);

  useEffect(() => {
    startAnimation();
  }, [ready, startAnimation]);

  useEffect(() => {
    return () => {
      transitionId.current += 1;
      animationStarted.current = false;
    };
  }, []);

  return useMemo(
    () => ({
      status,
      mounted: status !== "closed",
      interactive: ready && (status === "opening" || status === "open"),
      close,
      completeTransition,
    }),
    [status, ready, close, completeTransition],
  );
}
