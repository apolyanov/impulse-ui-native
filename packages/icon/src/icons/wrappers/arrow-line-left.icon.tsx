import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineLeftBoldIcon } from "../bold/arrow-line-left-bold.icon";
import { ArrowLineLeftDuotoneIcon } from "../duotone/arrow-line-left-duotone.icon";
import { ArrowLineLeftFillIcon } from "../fill/arrow-line-left-fill.icon";
import { ArrowLineLeftLightIcon } from "../light/arrow-line-left-light.icon";
import { ArrowLineLeftRegularIcon } from "../regular/arrow-line-left-regular.icon";
import { ArrowLineLeftThinIcon } from "../thin/arrow-line-left-thin.icon";

export const ArrowLineLeftIcon = memo(function ArrowLineLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineLeftBoldIcon,
      duotone: ArrowLineLeftDuotoneIcon,
      fill: ArrowLineLeftFillIcon,
      light: ArrowLineLeftLightIcon,
      regular: ArrowLineLeftRegularIcon,
      thin: ArrowLineLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
