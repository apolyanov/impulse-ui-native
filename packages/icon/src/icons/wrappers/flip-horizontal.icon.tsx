import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlipHorizontalBoldIcon } from "../bold/flip-horizontal-bold.icon";
import { FlipHorizontalDuotoneIcon } from "../duotone/flip-horizontal-duotone.icon";
import { FlipHorizontalFillIcon } from "../fill/flip-horizontal-fill.icon";
import { FlipHorizontalLightIcon } from "../light/flip-horizontal-light.icon";
import { FlipHorizontalRegularIcon } from "../regular/flip-horizontal-regular.icon";
import { FlipHorizontalThinIcon } from "../thin/flip-horizontal-thin.icon";

export const FlipHorizontalIcon = memo(function FlipHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlipHorizontalBoldIcon,
      duotone: FlipHorizontalDuotoneIcon,
      fill: FlipHorizontalFillIcon,
      light: FlipHorizontalLightIcon,
      regular: FlipHorizontalRegularIcon,
      thin: FlipHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
