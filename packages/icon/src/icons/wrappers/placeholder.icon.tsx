import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PlaceholderBoldIcon } from "../bold/placeholder-bold.icon";
import { PlaceholderDuotoneIcon } from "../duotone/placeholder-duotone.icon";
import { PlaceholderFillIcon } from "../fill/placeholder-fill.icon";
import { PlaceholderLightIcon } from "../light/placeholder-light.icon";
import { PlaceholderRegularIcon } from "../regular/placeholder-regular.icon";
import { PlaceholderThinIcon } from "../thin/placeholder-thin.icon";

export const PlaceholderIcon = memo(function Placeholder(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PlaceholderBoldIcon,
      duotone: PlaceholderDuotoneIcon,
      fill: PlaceholderFillIcon,
      light: PlaceholderLightIcon,
      regular: PlaceholderRegularIcon,
      thin: PlaceholderThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
