import type { ImageProps } from "react-native";
import { memo, useCallback, useMemo, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { useStyleProps, useThemedStyles } from "@impulse-ui-native/theme";

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
  const extractedStyleProps = useStyleProps(props);
  const styles = useThemedStyles(
    themedStyles,
    { size, status, statusColor, variant },
    [size, status, statusColor, variant],
  );
  const resolvedAccessible = accessible ?? Boolean(accessibilityLabel);
  const resolvedRole = role ?? (resolvedAccessible ? "img" : "none");
  const sourceKey = useMemo(() => JSON.stringify(source), [source]);

  const containerStyle = useMemo(
    () => [styles.container, extractedStyleProps, style],
    [extractedStyleProps, style, styles.container],
  );

  return (
    <View
      {...props}
      accessibilityLabel={accessibilityLabel}
      accessible={resolvedAccessible}
      role={resolvedRole}
      style={containerStyle}
    >
      <View style={styles.content}>
        {fallback ??
          (initials ? <Text style={styles.initials}>{initials}</Text> : null)}

        {source ? (
          <AvatarImageLayer
            key={sourceKey}
            imageProps={imageProps}
            source={source}
          />
        ) : null}
      </View>

      {status ? <View accessible={false} style={styles.status} /> : null}
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

  const imageStyle = useMemo(
    () => [staticStyles.image, imageProps?.style],
    [imageProps?.style],
  );

  if (hasError) return null;

  return (
    <Image
      resizeMode="cover"
      {...imageProps}
      accessible={false}
      onError={handleError}
      source={source}
      style={imageStyle}
    />
  );
});

interface AvatarThemeProps {
  size: NonNullable<AvatarProps["size"]>;
  status: AvatarProps["status"];
  statusColor: AvatarProps["statusColor"];
  variant: NonNullable<AvatarProps["variant"]>;
}

function themedStyles(theme: AppTheme, props: AvatarThemeProps) {
  const { size, status, statusColor, variant } = props;
  const avatarTokens = theme.components.avatar;
  const sizeTokens = avatarTokens.sizes[size];
  const variantTokens = avatarTokens.variants[variant];

  return StyleSheet.create({
    container: {
      flexShrink: 0,
      height: sizeTokens.size,
      position: "relative",
      width: sizeTokens.size,
    },
    content: {
      alignItems: "center",
      backgroundColor: variantTokens.backgroundColor,
      borderColor: variantTokens.borderColor,
      borderRadius: sizeTokens.size / 2,
      borderWidth: avatarTokens.borderWidth,
      height: "100%",
      justifyContent: "center",
      overflow: "hidden",
      width: "100%",
    },
    initials: {
      color: variantTokens.color,
      fontFamily: avatarTokens.fontFamily,
      fontSize: sizeTokens.fontSize,
      textAlign: "center",
    },
    status: {
      backgroundColor:
        statusColor ?? (status ? avatarTokens.statusColors[status] : undefined),
      borderColor: avatarTokens.statusBorderColor,
      borderRadius: sizeTokens.statusSize / 2,
      borderWidth: sizeTokens.statusBorderWidth,
      bottom: 0,
      height: sizeTokens.statusSize,
      position: "absolute",
      right: 0,
      width: sizeTokens.statusSize,
    },
  });
}

const staticStyles = StyleSheet.create({
  image: {
    bottom: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  },
});
