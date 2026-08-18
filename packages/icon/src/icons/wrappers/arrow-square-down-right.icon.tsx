import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareDownRightBoldIcon } from "../bold/arrow-square-down-right-bold.icon";
import { ArrowSquareDownRightDuotoneIcon } from "../duotone/arrow-square-down-right-duotone.icon";
import { ArrowSquareDownRightFillIcon } from "../fill/arrow-square-down-right-fill.icon";
import { ArrowSquareDownRightLightIcon } from "../light/arrow-square-down-right-light.icon";
import { ArrowSquareDownRightRegularIcon } from "../regular/arrow-square-down-right-regular.icon";
import { ArrowSquareDownRightThinIcon } from "../thin/arrow-square-down-right-thin.icon";

export const ArrowSquareDownRightIcon = memo(function ArrowSquareDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareDownRightBoldIcon,
      duotone: ArrowSquareDownRightDuotoneIcon,
      fill: ArrowSquareDownRightFillIcon,
      light: ArrowSquareDownRightLightIcon,
      regular: ArrowSquareDownRightRegularIcon,
      thin: ArrowSquareDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
