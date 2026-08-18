import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsHorizontalBoldIcon } from "../bold/arrows-horizontal-bold.icon";
import { ArrowsHorizontalDuotoneIcon } from "../duotone/arrows-horizontal-duotone.icon";
import { ArrowsHorizontalFillIcon } from "../fill/arrows-horizontal-fill.icon";
import { ArrowsHorizontalLightIcon } from "../light/arrows-horizontal-light.icon";
import { ArrowsHorizontalRegularIcon } from "../regular/arrows-horizontal-regular.icon";
import { ArrowsHorizontalThinIcon } from "../thin/arrows-horizontal-thin.icon";

export const ArrowsHorizontalIcon = memo(function ArrowsHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsHorizontalBoldIcon,
      duotone: ArrowsHorizontalDuotoneIcon,
      fill: ArrowsHorizontalFillIcon,
      light: ArrowsHorizontalLightIcon,
      regular: ArrowsHorizontalRegularIcon,
      thin: ArrowsHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
