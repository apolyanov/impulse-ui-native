import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LineVerticalBoldIcon } from "../bold/line-vertical-bold.icon";
import { LineVerticalDuotoneIcon } from "../duotone/line-vertical-duotone.icon";
import { LineVerticalFillIcon } from "../fill/line-vertical-fill.icon";
import { LineVerticalLightIcon } from "../light/line-vertical-light.icon";
import { LineVerticalRegularIcon } from "../regular/line-vertical-regular.icon";
import { LineVerticalThinIcon } from "../thin/line-vertical-thin.icon";

export const LineVerticalIcon = memo(function LineVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LineVerticalBoldIcon,
      duotone: LineVerticalDuotoneIcon,
      fill: LineVerticalFillIcon,
      light: LineVerticalLightIcon,
      regular: LineVerticalRegularIcon,
      thin: LineVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
