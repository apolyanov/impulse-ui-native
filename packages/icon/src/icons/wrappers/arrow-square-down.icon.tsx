import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareDownBoldIcon } from "../bold/arrow-square-down-bold.icon";
import { ArrowSquareDownDuotoneIcon } from "../duotone/arrow-square-down-duotone.icon";
import { ArrowSquareDownFillIcon } from "../fill/arrow-square-down-fill.icon";
import { ArrowSquareDownLightIcon } from "../light/arrow-square-down-light.icon";
import { ArrowSquareDownRegularIcon } from "../regular/arrow-square-down-regular.icon";
import { ArrowSquareDownThinIcon } from "../thin/arrow-square-down-thin.icon";

export const ArrowSquareDownIcon = memo(function ArrowSquareDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareDownBoldIcon,
      duotone: ArrowSquareDownDuotoneIcon,
      fill: ArrowSquareDownFillIcon,
      light: ArrowSquareDownLightIcon,
      regular: ArrowSquareDownRegularIcon,
      thin: ArrowSquareDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
