import type { ComponentRef } from "react";
import type { ScrollView, ScrollViewProps } from "react-native";
import { useRef } from "react";
import { TextInput } from "react-native";

import { useEventCallback } from "@impulse-ui-native/core";

export function useFlyoutFocusScroll(enabled: boolean, offset: number) {
  const scrollRef = useRef<ComponentRef<typeof ScrollView>>(null);
  const focusedInput =
    useRef<ReturnType<typeof TextInput.State.currentlyFocusedInput>>(null);
  const viewportHeight = useRef(0);
  const contentHeight = useRef(0);
  const scrollY = useRef(0);

  const revealFocusedInput = useEventCallback((animated: boolean) => {
    const input = focusedInput.current;
    const scrollView = scrollRef.current;
    const content = scrollView?.getInnerViewRef();

    if (
      !enabled ||
      !input ||
      input !== TextInput.State.currentlyFocusedInput() ||
      !scrollView ||
      !content ||
      viewportHeight.current <= 0
    ) {
      return;
    }

    input.measureLayout(content, (_x, y, _width, height) => {
      if (focusedInput.current !== input || scrollRef.current !== scrollView) {
        return;
      }

      const revealY = y + height + offset - viewportHeight.current;
      const maxY = Math.max(0, contentHeight.current - viewportHeight.current);
      const targetY = Math.min(maxY, Math.max(0, revealY));

      if (targetY > scrollY.current) {
        scrollY.current = targetY;
        scrollView.scrollTo({ y: targetY, animated });
      }
    });
  });
  const onFocusInput = useEventCallback(() => {
    focusedInput.current = TextInput.State.currentlyFocusedInput();
    revealFocusedInput(true);
  });
  const onBlurInput = useEventCallback(() => {
    focusedInput.current = TextInput.State.currentlyFocusedInput();
  });
  const onLayout = useEventCallback<NonNullable<ScrollViewProps["onLayout"]>>(
    (event) => {
      viewportHeight.current = event.nativeEvent.layout.height;
      revealFocusedInput(false);
    },
  );
  const onContentSizeChange = useEventCallback<
    NonNullable<ScrollViewProps["onContentSizeChange"]>
  >((_width, height) => {
    contentHeight.current = height;
    revealFocusedInput(false);
  });
  const onScroll = useEventCallback<NonNullable<ScrollViewProps["onScroll"]>>(
    (event) => {
      scrollY.current = event.nativeEvent.contentOffset.y;
    },
  );

  return {
    scrollRef,
    onFocusInput,
    onBlurInput,
    onLayout,
    onContentSizeChange,
    onScroll,
  };
}
