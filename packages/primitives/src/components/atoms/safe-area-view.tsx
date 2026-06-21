import { memo, useCallback, useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import {
  Edge,
  EdgeMode,
  EdgeRecord,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { EdgeToShorthandKeyMap, EdgeToSpacingKeyMap } from "../../constants";
import { SafeAreaViewProps } from "../../types";
import { View } from "./view";

export const SafeAreaView = memo(function SafeAreaView(
  props: SafeAreaViewProps,
) {
  const { edges, mode = "padding", style, ...rest } = props;
  const insets = useSafeAreaInsets();

  const flatenedStyle = useMemo(() => {
    return StyleSheet.flatten(style);
  }, [style]);

  const nativeEdges = useMemo<Record<Edge, EdgeMode>>(() => {
    if (!edges) {
      return {
        top: "additive",
        bottom: "additive",
        left: "additive",
        right: "additive",
      };
    }

    let computedEdges: EdgeRecord;

    if (Array.isArray(edges)) {
      computedEdges = edges.reduce<EdgeRecord>((acc, current: Edge) => {
        acc[current] = "additive";

        return acc;
      }, {});
    } else {
      computedEdges = edges as EdgeRecord;
    }

    return {
      top: computedEdges.top ?? "off",
      bottom: computedEdges.bottom ?? "off",
      left: computedEdges.left ?? "off",
      right: computedEdges.right ?? "off",
    };
  }, [edges]);

  const getSpacingKey = useCallback(
    (edge: Edge): keyof ViewStyle => `${mode}${EdgeToSpacingKeyMap[edge]}`,
    [mode],
  );

  const getSpacingForEdge = useCallback(
    (edge: Edge): number => {
      const shorthand: keyof ViewStyle = `${mode}${EdgeToShorthandKeyMap[edge]}`;
      const spacing: keyof ViewStyle = getSpacingKey(edge);

      return Number(
        flatenedStyle?.[spacing] ??
          flatenedStyle?.[shorthand] ??
          flatenedStyle?.[mode] ??
          0,
      );
    },
    [flatenedStyle, getSpacingKey, mode],
  );

  const resolveEdge = useCallback(
    (inset: number, current: number, edgeMode: EdgeMode) => {
      if (edgeMode === "off") {
        return current;
      }

      if (edgeMode === "maximum") {
        return Math.max(inset, current);
      }

      return inset + current;
    },
    [],
  );

  const computedStyle = useMemo(() => {
    const insetsStyle: ViewStyle = {
      [getSpacingKey("top")]: resolveEdge(
        insets.top,
        getSpacingForEdge("top"),
        nativeEdges.top,
      ),
      [getSpacingKey("bottom")]: resolveEdge(
        insets.bottom,
        getSpacingForEdge("bottom"),
        nativeEdges.bottom,
      ),
      [getSpacingKey("left")]: resolveEdge(
        insets.left,
        getSpacingForEdge("left"),
        nativeEdges.left,
      ),
      [getSpacingKey("right")]: resolveEdge(
        insets.right,
        getSpacingForEdge("right"),
        nativeEdges.right,
      ),
    };

    return StyleSheet.flatten([style, insetsStyle]);
  }, [
    insets,
    nativeEdges,
    style,
    resolveEdge,
    getSpacingKey,
    getSpacingForEdge,
  ]);

  return <View style={computedStyle} {...rest} />;
});
