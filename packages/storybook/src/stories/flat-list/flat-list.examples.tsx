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

  const [loaded, setLoaded] = useState(mode !== "delayed");

  const horizontal = mode === "horizontal";
  const extent = horizontal ? space.xxl * 3 : space.xxl;
  const { scrollToInitialIndex, ...initialScroll } = useFlatListInitialScroll<
    (typeof FlatListExampleItems)[number]
  >({
    itemSize: extent,
    initialScrollIndex: FlatListExampleTarget,
  });

  const handleLoad = useCallback(() => setLoaded(true), []);
  const keyExtractor = useCallback(
    (item: (typeof FlatListExampleItems)[number]) => item.id,
    [],
  );
  const renderItem = useCallback(
    ({ index }: ListRenderItemInfo<(typeof FlatListExampleItems)[number]>) => {
      const height = horizontal ? undefined : extent;
      const width = horizontal ? extent : undefined;
      const backgroundColor =
        index === FlatListExampleTarget
          ? colors.surface.default.value
          : colors.surface.canvas.value;

      return (
        <View
          height={height}
          width={width}
          padding={space.xs}
          justifyContent="center"
          backgroundColor={backgroundColor}
        >
          <Typography.Body numberOfLines={1}>Option {index}</Typography.Body>
        </View>
      );
    },
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
        Native FlatList starts at option {FlatListExampleTarget}. Reset scrolls
        the existing list back to that option.
      </Typography.Body>
      <View flexDirection="row" gap={space.sm}>
        <Button onPress={scrollToInitialIndex}>Reset</Button>
        {!loaded ? <Button onPress={handleLoad}>Load options</Button> : null}
      </View>
      <View height={space.xxl * 5}>
        {loaded ? (
          <FlatList
            {...initialScroll}
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
