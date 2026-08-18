import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineDownRightBoldIcon } from "../bold/arrow-line-down-right-bold.icon";
import { ArrowLineDownRightDuotoneIcon } from "../duotone/arrow-line-down-right-duotone.icon";
import { ArrowLineDownRightFillIcon } from "../fill/arrow-line-down-right-fill.icon";
import { ArrowLineDownRightLightIcon } from "../light/arrow-line-down-right-light.icon";
import { ArrowLineDownRightRegularIcon } from "../regular/arrow-line-down-right-regular.icon";
import { ArrowLineDownRightThinIcon } from "../thin/arrow-line-down-right-thin.icon";

export const ArrowLineDownRightIcon = memo(function ArrowLineDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineDownRightBoldIcon,
      duotone: ArrowLineDownRightDuotoneIcon,
      fill: ArrowLineDownRightFillIcon,
      light: ArrowLineDownRightLightIcon,
      regular: ArrowLineDownRightRegularIcon,
      thin: ArrowLineDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
