import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsInLineHorizontalBoldIcon } from "../bold/arrows-in-line-horizontal-bold.icon";
import { ArrowsInLineHorizontalDuotoneIcon } from "../duotone/arrows-in-line-horizontal-duotone.icon";
import { ArrowsInLineHorizontalFillIcon } from "../fill/arrows-in-line-horizontal-fill.icon";
import { ArrowsInLineHorizontalLightIcon } from "../light/arrows-in-line-horizontal-light.icon";
import { ArrowsInLineHorizontalRegularIcon } from "../regular/arrows-in-line-horizontal-regular.icon";
import { ArrowsInLineHorizontalThinIcon } from "../thin/arrows-in-line-horizontal-thin.icon";

export const ArrowsInLineHorizontalIcon = memo(function ArrowsInLineHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInLineHorizontalBoldIcon,
      duotone: ArrowsInLineHorizontalDuotoneIcon,
      fill: ArrowsInLineHorizontalFillIcon,
      light: ArrowsInLineHorizontalLightIcon,
      regular: ArrowsInLineHorizontalRegularIcon,
      thin: ArrowsInLineHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
