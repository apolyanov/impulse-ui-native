import { memo, useCallback, useMemo, useState } from "react";

import { Flyout } from "@impulse-ui-native/flyout";
import { Input } from "@impulse-ui-native/input";
import { Portal } from "@impulse-ui-native/portal";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { useSpace } from "@impulse-ui-native/theme";

import { useFlyoutFocusScroll } from "./use-flyout-focus-scroll.hook";

interface FlyoutPreviewProps {
  placement: "top" | "bottom";
  compound?: boolean;
  scrollable?: boolean;
  keyboardAware?: boolean;
}

export const FlyoutPreview = memo(function FlyoutPreview({
  placement,
  compound,
  scrollable,
  keyboardAware,
}: FlyoutPreviewProps) {
  const space = useSpace();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const {
    scrollRef,
    onFocusInput,
    onBlurInput,
    onLayout,
    onContentSizeChange,
    onScroll,
  } = useFlyoutFocusScroll(Boolean(keyboardAware || scrollable), space.sm);

  const show = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const toggleContent = useCallback(() => setExpanded((value) => !value), []);
  const fieldCount = expanded ? 24 : 4;
  const resizeLabel = expanded ? "Show fewer fields" : "Show more fields";

  const content = useMemo(
    () => (
      <>
        <Typography.Body>
          Press the overlay or drag the sheet toward the edge to close it.
        </Typography.Body>
        <Button variant="outlined" onPress={close}>
          Close
        </Button>
      </>
    ),
    [close],
  );

  const staticContentStyle = useMemo(
    () => ({ gap: space.mxs, paddingBottom: space.sm }),
    [space.mxs, space.sm],
  );
  const scrollContentStyle = useMemo(
    () => ({ gap: space.sm, paddingBottom: space.sm }),
    [space.sm],
  );
  const scrollContent = useMemo(
    () => (
      <>
        <Button variant="outlined" onPress={toggleContent}>
          {resizeLabel}
        </Button>
        {Array.from({ length: fieldCount }, (_, index) => {
          const placeholder = `Field ${index + 1}`;

          return (
            <Input
              key={index}
              placeholder={placeholder}
              onFocus={onFocusInput}
              onBlur={onBlurInput}
            />
          );
        })}
        <Button onPress={close}>Close</Button>
      </>
    ),
    [close, toggleContent, resizeLabel, fieldCount, onFocusInput, onBlurInput],
  );

  const body = keyboardAware ? (
    <Flyout.KeyboardAwareView>
      <Flyout.ScrollView
        ref={scrollRef}
        contentContainerStyle={scrollContentStyle}
        onLayout={onLayout}
        onContentSizeChange={onContentSizeChange}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {scrollContent}
      </Flyout.ScrollView>
    </Flyout.KeyboardAwareView>
  ) : scrollable ? (
    <Flyout.ScrollView
      ref={scrollRef}
      contentContainerStyle={scrollContentStyle}
      onLayout={onLayout}
      onContentSizeChange={onContentSizeChange}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      {scrollContent}
    </Flyout.ScrollView>
  ) : (
    <Flyout.Content style={staticContentStyle}>{content}</Flyout.Content>
  );

  return (
    <View>
      <Button onPress={show}>{`Open ${placement} flyout`}</Button>
      <Portal
        id={`${placement}-${compound ? "compound" : "ready-made"}-story-flyout-portal`}
      >
        {compound ? (
          <Flyout.Root
            id={`${placement}-compound-story-flyout`}
            placement={placement}
            open={open}
            onClose={close}
          >
            {placement === "bottom" ? <Flyout.Handle /> : null}
            <Flyout.Header>
              <Flyout.Title>Compound flyout</Flyout.Title>
            </Flyout.Header>
            {body}
            {placement === "top" ? <Flyout.Handle /> : null}
          </Flyout.Root>
        ) : (
          <Flyout
            id={`${placement}-story-flyout`}
            title="Storybook flyout"
            placement={placement}
            open={open}
            onClose={close}
          >
            {body}
          </Flyout>
        )}
      </Portal>
    </View>
  );
});
