import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareDownLeftBoldIcon } from "../bold/arrow-square-down-left-bold.icon";
import { ArrowSquareDownLeftDuotoneIcon } from "../duotone/arrow-square-down-left-duotone.icon";
import { ArrowSquareDownLeftFillIcon } from "../fill/arrow-square-down-left-fill.icon";
import { ArrowSquareDownLeftLightIcon } from "../light/arrow-square-down-left-light.icon";
import { ArrowSquareDownLeftRegularIcon } from "../regular/arrow-square-down-left-regular.icon";
import { ArrowSquareDownLeftThinIcon } from "../thin/arrow-square-down-left-thin.icon";

export const ArrowSquareDownLeftIcon = memo(function ArrowSquareDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareDownLeftBoldIcon,
      duotone: ArrowSquareDownLeftDuotoneIcon,
      fill: ArrowSquareDownLeftFillIcon,
      light: ArrowSquareDownLeftLightIcon,
      regular: ArrowSquareDownLeftRegularIcon,
      thin: ArrowSquareDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
