import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareUpRightBoldIcon } from "../bold/arrow-square-up-right-bold.icon";
import { ArrowSquareUpRightDuotoneIcon } from "../duotone/arrow-square-up-right-duotone.icon";
import { ArrowSquareUpRightFillIcon } from "../fill/arrow-square-up-right-fill.icon";
import { ArrowSquareUpRightLightIcon } from "../light/arrow-square-up-right-light.icon";
import { ArrowSquareUpRightRegularIcon } from "../regular/arrow-square-up-right-regular.icon";
import { ArrowSquareUpRightThinIcon } from "../thin/arrow-square-up-right-thin.icon";

export const ArrowSquareUpRightIcon = memo(function ArrowSquareUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpRightBoldIcon,
      duotone: ArrowSquareUpRightDuotoneIcon,
      fill: ArrowSquareUpRightFillIcon,
      light: ArrowSquareUpRightLightIcon,
      regular: ArrowSquareUpRightRegularIcon,
      thin: ArrowSquareUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
