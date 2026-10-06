import { useEffect, useRef, useState } from "react";
import {
  cancelAnimation,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useEventCallback } from "@impulse-ui-native/core";
import { useOverlayContext } from "@impulse-ui-native/overlay";

import type { ToastRootProps } from "../types";
import { EnterDuration, ExitDuration } from "../constants/toast.constants";
import { useToastTimer } from "./use-toast-timer.hook";

export function useToastLifecycle(props: ToastRootProps, duration: number) {
  const {
    id,
    open = true,
    onOpen,
    onOpenFinished,
    onClose,
    onCloseFinished,
  } = props;

  const { store } = useOverlayContext();

  const [entered, setEntered] = useState(false);
  const [finished, setFinished] = useState(false);

  const opened = useRef(false);
  const closing = useRef(false);
  const settled = useRef(false);
  const transitionId = useRef(0);

  const progress = useSharedValue(0);

  const close = useEventCallback(() => store.close(id));

  const notifyOpen = useEventCallback(() => onOpen?.(id));

  const notifyEntered = useEventCallback(() => onOpenFinished?.(id));

  const notifyClose = useEventCallback(() => onClose?.(id));

  const finishClose = useEventCallback(() => {
    if (settled.current) {
      return;
    }

    settled.current = true;

    setFinished(true);

    onCloseFinished?.(id);
  });

  const finishTransition = useEventCallback(
    (completedTransitionId: number, entering: boolean) => {
      if (transitionId.current !== completedTransitionId || settled.current) {
        return;
      }

      if (entering) {
        setEntered(true);

        notifyEntered();
      } else {
        finishClose();
      }
    },
  );

  useToastTimer(entered && open && !finished, duration, close);

  useEffect(() => {
    if (finished) {
      return;
    }

    const currentTransitionId = ++transitionId.current;

    if (!open) {
      const firstClose = !closing.current;

      closing.current = true;

      if (!opened.current) {
        try {
          if (firstClose) {
            notifyClose();
          }
        } finally {
          finishClose();
        }

        return;
      }

      try {
        if (firstClose) {
          notifyClose();
        }
      } finally {
        progress.value = withTiming(
          0,
          { duration: ExitDuration },
          (completed) => {
            if (completed) {
              scheduleOnRN(finishTransition, currentTransitionId, false);
            }
          },
        );
      }

      return () => {
        transitionId.current += 1;

        cancelAnimation(progress);
      };
    }

    const firstOpen = !opened.current;

    opened.current = true;

    try {
      if (firstOpen) {
        notifyOpen();
      }
    } finally {
      progress.value = withTiming(
        1,
        { duration: EnterDuration },
        (completed) => {
          if (completed) {
            scheduleOnRN(finishTransition, currentTransitionId, true);
          }
        },
      );
    }

    return () => {
      transitionId.current += 1;

      cancelAnimation(progress);
    };
  }, [
    finishClose,
    finishTransition,
    finished,
    notifyClose,
    notifyEntered,
    notifyOpen,
    open,
    progress,
  ]);

  return { progress, close, finished, interactive: open && !finished };
}
