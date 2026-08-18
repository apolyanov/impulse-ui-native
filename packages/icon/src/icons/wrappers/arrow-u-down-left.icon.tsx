import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowUDownLeftBoldIcon } from "../bold/arrow-u-down-left-bold.icon";
import { ArrowUDownLeftDuotoneIcon } from "../duotone/arrow-u-down-left-duotone.icon";
import { ArrowUDownLeftFillIcon } from "../fill/arrow-u-down-left-fill.icon";
import { ArrowUDownLeftLightIcon } from "../light/arrow-u-down-left-light.icon";
import { ArrowUDownLeftRegularIcon } from "../regular/arrow-u-down-left-regular.icon";
import { ArrowUDownLeftThinIcon } from "../thin/arrow-u-down-left-thin.icon";

export const ArrowUDownLeftIcon = memo(function ArrowUDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUDownLeftBoldIcon,
      duotone: ArrowUDownLeftDuotoneIcon,
      fill: ArrowUDownLeftFillIcon,
      light: ArrowUDownLeftLightIcon,
      regular: ArrowUDownLeftRegularIcon,
      thin: ArrowUDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
