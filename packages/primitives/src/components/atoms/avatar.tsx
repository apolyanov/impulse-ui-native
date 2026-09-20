import type { ImageProps } from "react-native";
import { memo, useCallback, useMemo, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";

import { useComponentsTokens, useStyleProps } from "@impulse-ui-native/theme";

import type { AvatarProps } from "../../types";
import { View } from "./view";

export const Avatar = memo(function Avatar({
  accessibilityLabel,
  accessible,
  fallback,
  imageProps,
  initials,
  role,
  size = "medium",
  source,
  status,
  statusColor,
  style,
  variant = "filled",
  ...props
}: AvatarProps) {
  const tokens = useComponentsTokens().avatar;
  const extractedStyleProps = useStyleProps(props);
  const sizeTokens = tokens.sizes[size];
  const variantTokens = tokens.variants[variant];
  const resolvedAccessible = accessible ?? Boolean(accessibilityLabel);
  const resolvedRole = role ?? (resolvedAccessible ? "img" : "none");
  const sourceKey = useMemo(() => JSON.stringify(source), [source]);

  const containerStyle = useMemo(
    () => [
      styles.container,
      { height: sizeTokens.size, width: sizeTokens.size },
      extractedStyleProps,
      style,
    ],
    [extractedStyleProps, sizeTokens.size, style],
  );

  const contentStyle = useMemo(
    () => [
      styles.content,
      {
        backgroundColor: variantTokens.backgroundColor,
        borderColor: variantTokens.borderColor,
        borderRadius: sizeTokens.size / 2,
        borderWidth: tokens.borderWidth,
      },
    ],
    [sizeTokens.size, tokens.borderWidth, variantTokens],
  );

  const initialsStyle = useMemo(
    () => [
      styles.initials,
      {
        color: variantTokens.color,
        fontFamily: tokens.fontFamily,
        fontSize: sizeTokens.fontSize,
      },
    ],
    [sizeTokens.fontSize, tokens.fontFamily, variantTokens.color],
  );

  const statusStyle = useMemo(
    () => [
      styles.status,
      {
        backgroundColor:
          statusColor ?? (status ? tokens.statusColors[status] : undefined),
        borderColor: tokens.statusBorderColor,
        borderRadius: sizeTokens.statusSize / 2,
        borderWidth: sizeTokens.statusBorderWidth,
        height: sizeTokens.statusSize,
        width: sizeTokens.statusSize,
      },
    ],
    [sizeTokens, status, statusColor, tokens],
  );

  return (
    <View
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessible={resolvedAccessible}
      role={resolvedRole}
      style={containerStyle}
    >
      <View style={contentStyle}>
        {fallback ??
          (initials ? <Text style={initialsStyle}>{initials}</Text> : null)}

        {source ? (
          <AvatarImageLayer
            key={sourceKey}
            imageProps={imageProps}
            source={source}
          />
        ) : null}
      </View>

      {status ? <View accessible={false} style={statusStyle} /> : null}
    </View>
  );
});

interface AvatarImageLayerProps {
  imageProps: AvatarProps["imageProps"];
  source: NonNullable<AvatarProps["source"]>;
}

const AvatarImageLayer = memo(function AvatarImageLayer({
  imageProps,
  source,
}: AvatarImageLayerProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback<NonNullable<ImageProps["onError"]>>(
    (event) => {
      setHasError(true);
      imageProps?.onError?.(event);
    },
    [imageProps],
  );

  if (hasError) return null;

  return (
    <Image
      resizeMode="cover"
      {...imageProps}
      accessible={false}
      onError={handleError}
      source={source}
      style={[styles.image, imageProps?.style]}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flexShrink: 0,
    position: "relative",
  },
  content: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  },
  image: {
    bottom: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  },
  initials: {
    textAlign: "center",
  },
  status: {
    bottom: 0,
    position: "absolute",
    right: 0,
  },
});
