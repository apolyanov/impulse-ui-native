import type { ListRenderItemInfo } from "react-native";
import { memo, useCallback, useState } from "react";

import {
  FlatList,
  useFlatListInitialScroll,
} from "@impulse-ui-native/flat-list";
import { Button, Typography, View } from "@impulse-ui-native/primitives";
import { useColors, useSpace } from "@impulse-ui-native/theme";

import {
  FlatListExampleItems,
  FlatListExampleTarget,
} from "./flat-list.constants";

interface FlatListExampleProps {
  mode: "fixed" | "horizontal" | "delayed";
}

export const FlatListExample = memo(function FlatListExample({
  mode,
}: FlatListExampleProps) {
  const colors = useColors();
  const space = useSpace();

  const [mountKey, setMountKey] = useState(0);
  const [loaded, setLoaded] = useState(mode !== "delayed");

  const horizontal = mode === "horizontal";
  const extent = horizontal ? space.xxl * 3 : space.xxl;
  const initialScroll = useFlatListInitialScroll({
    itemSize: extent,
    initialScrollIndex: FlatListExampleTarget,
  });

  const handleReset = useCallback(() => setMountKey((value) => value + 1), []);
  const handleLoad = useCallback(() => setLoaded(true), []);
  const keyExtractor = useCallback(
    (item: (typeof FlatListExampleItems)[number]) => item.id,
    [],
  );
  const renderItem = useCallback(
    ({ index }: ListRenderItemInfo<(typeof FlatListExampleItems)[number]>) => (
      <View
        height={horizontal ? undefined : extent}
        width={horizontal ? extent : undefined}
        padding={space.xs}
        justifyContent="center"
        backgroundColor={
          index === FlatListExampleTarget
            ? colors.surface.default.value
            : colors.surface.canvas.value
        }
      >
        <Typography.Body numberOfLines={1}>Option {index}</Typography.Body>
      </View>
    ),
    [
      horizontal,
      extent,
      space.xs,
      colors.surface.default.value,
      colors.surface.canvas.value,
    ],
  );

  return (
    <View flex={1} padding={space.sm} gap={space.sm}>
      <Typography.Title4>{mode} initial positioning</Typography.Title4>
      <Typography.Body>
        Native FlatList starts at option {FlatListExampleTarget}. Reset remounts
        the list to apply its initial index again.
      </Typography.Body>
      <View flexDirection="row" gap={space.sm}>
        <Button onPress={handleReset}>Reset</Button>
        {!loaded ? <Button onPress={handleLoad}>Load options</Button> : null}
      </View>
      <View height={space.xxl * 5}>
        {loaded ? (
          <FlatList
            {...initialScroll}
            key={mountKey}
            data={FlatListExampleItems}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            horizontal={horizontal}
          />
        ) : null}
      </View>
    </View>
  );
});
