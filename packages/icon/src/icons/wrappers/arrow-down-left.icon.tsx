import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowDownLeftBoldIcon } from "../bold/arrow-down-left-bold.icon";
import { ArrowDownLeftDuotoneIcon } from "../duotone/arrow-down-left-duotone.icon";
import { ArrowDownLeftFillIcon } from "../fill/arrow-down-left-fill.icon";
import { ArrowDownLeftLightIcon } from "../light/arrow-down-left-light.icon";
import { ArrowDownLeftRegularIcon } from "../regular/arrow-down-left-regular.icon";
import { ArrowDownLeftThinIcon } from "../thin/arrow-down-left-thin.icon";

export const ArrowDownLeftIcon = memo(function ArrowDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowDownLeftBoldIcon,
      duotone: ArrowDownLeftDuotoneIcon,
      fill: ArrowDownLeftFillIcon,
      light: ArrowDownLeftLightIcon,
      regular: ArrowDownLeftRegularIcon,
      thin: ArrowDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
