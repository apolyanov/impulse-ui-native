import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowSquareUpBoldIcon } from "../bold/arrow-square-up-bold.icon";
import { ArrowSquareUpDuotoneIcon } from "../duotone/arrow-square-up-duotone.icon";
import { ArrowSquareUpFillIcon } from "../fill/arrow-square-up-fill.icon";
import { ArrowSquareUpLightIcon } from "../light/arrow-square-up-light.icon";
import { ArrowSquareUpRegularIcon } from "../regular/arrow-square-up-regular.icon";
import { ArrowSquareUpThinIcon } from "../thin/arrow-square-up-thin.icon";

export const ArrowSquareUpIcon = memo(function ArrowSquareUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowSquareUpBoldIcon,
      duotone: ArrowSquareUpDuotoneIcon,
      fill: ArrowSquareUpFillIcon,
      light: ArrowSquareUpLightIcon,
      regular: ArrowSquareUpRegularIcon,
      thin: ArrowSquareUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
