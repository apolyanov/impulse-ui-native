import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PlaceholderBoldIcon } from "../bold";
import { PlaceholderDuotoneIcon } from "../duotone";
import { PlaceholderFillIcon } from "../fill";
import { PlaceholderLightIcon } from "../light";
import { PlaceholderRegularIcon } from "../regular";
import { PlaceholderThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PlaceholderIcon = memo(function Placeholder(
  props: IconWrapperProps
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
