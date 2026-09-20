import type {
  NativeSyntheticEvent,
  TextInputContentSizeChangeEventData,
  TextInputProps,
} from "react-native";
import { useCallback, useState } from "react";

import { useControllableState } from "@impulse-ui-native/core";

interface UseTextareaOptions {
  autoGrow: boolean;
  borderWidth: number;
  defaultValue: string;
  maxRows: number;
  minRows: number;
  onChangeText: TextInputProps["onChangeText"];
  onContentSizeChange: TextInputProps["onContentSizeChange"];
  paddingVertical: number;
  rowHeight: number;
  value: string | undefined;
}

export function useTextarea({
  autoGrow,
  borderWidth,
  defaultValue,
  maxRows,
  minRows,
  onChangeText,
  onContentSizeChange,
  paddingVertical,
  rowHeight,
  value: valueProp,
}: UseTextareaOptions) {
  const [value, setValue] = useControllableState<string>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onChangeText,
  });
  const [contentHeight, setContentHeight] = useState(0);

  const normalizedMinRows = normalizeRows(minRows, 3);
  const normalizedMaxRows = Math.max(
    normalizedMinRows,
    normalizeRows(maxRows, 8),
  );
  const verticalInset = paddingVertical * 2 + borderWidth * 2;
  const minHeight = normalizedMinRows * rowHeight + verticalInset;
  const maxHeight = normalizedMaxRows * rowHeight + verticalInset;
  const measuredHeight = Math.max(minHeight, contentHeight);
  const height = autoGrow ? Math.min(measuredHeight, maxHeight) : minHeight;
  const scrollEnabled = !autoGrow || measuredHeight > maxHeight;

  const handleContentSizeChange = useCallback(
    (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
      setContentHeight(event.nativeEvent.contentSize.height);
      onContentSizeChange?.(event);
    },
    [onContentSizeChange],
  );

  return {
    characterCount: value.length,
    handleChangeText: setValue,
    handleContentSizeChange,
    height,
    numberOfLines: normalizedMinRows,
    scrollEnabled,
    value,
  };
}

function normalizeRows(value: number, fallback: number) {
  return Number.isFinite(value) ? Math.max(1, Math.floor(value)) : fallback;
}
