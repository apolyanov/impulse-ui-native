import type { FlatList, ListRenderItem } from "react-native";
import { memo, useCallback, useMemo, useRef, useState } from "react";

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
  virtualized?: boolean;
  keyboardAware?: boolean;
}

export const FlyoutPreview = memo(function FlyoutPreview({
  placement,
  compound,
  scrollable,
  virtualized,
  keyboardAware,
}: FlyoutPreviewProps) {
  const space = useSpace();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const listRef = useRef<FlatList<number>>(null);
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

  const rows = useMemo(
    () => Array.from({ length: 100 }, (_, index) => index + 1),
    [],
  );
  const renderRow = useCallback<ListRenderItem<number>>(
    ({ item }) => (
      <View paddingVertical={space.sm}>
        <Typography.Body>Row {item}</Typography.Body>
      </View>
    ),
    [space.sm],
  );
  const rowKey = useCallback((item: number) => String(item), []);

  const body = useMemo(
    () =>
      virtualized ? (
        <Flyout.FlatList
          ref={listRef}
          data={rows}
          renderItem={renderRow}
          keyExtractor={rowKey}
        />
      ) : keyboardAware ? (
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
      ),
    [
      virtualized,
      listRef,
      rows,
      renderRow,
      rowKey,
      keyboardAware,
      scrollable,
      scrollRef,
      scrollContentStyle,
      onLayout,
      onContentSizeChange,
      onScroll,
      scrollContent,
      staticContentStyle,
      content,
    ],
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
