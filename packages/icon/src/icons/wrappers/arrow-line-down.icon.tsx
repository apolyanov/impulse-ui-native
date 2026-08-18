import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineDownBoldIcon } from "../bold/arrow-line-down-bold.icon";
import { ArrowLineDownDuotoneIcon } from "../duotone/arrow-line-down-duotone.icon";
import { ArrowLineDownFillIcon } from "../fill/arrow-line-down-fill.icon";
import { ArrowLineDownLightIcon } from "../light/arrow-line-down-light.icon";
import { ArrowLineDownRegularIcon } from "../regular/arrow-line-down-regular.icon";
import { ArrowLineDownThinIcon } from "../thin/arrow-line-down-thin.icon";

export const ArrowLineDownIcon = memo(function ArrowLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineDownBoldIcon,
      duotone: ArrowLineDownDuotoneIcon,
      fill: ArrowLineDownFillIcon,
      light: ArrowLineDownLightIcon,
      regular: ArrowLineDownRegularIcon,
      thin: ArrowLineDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
