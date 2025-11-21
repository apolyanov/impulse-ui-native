import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowSquareDownRightBoldIcon } from "../bold";
import { ArrowSquareDownRightDuotoneIcon } from "../duotone";
import { ArrowSquareDownRightFillIcon } from "../fill";
import { ArrowSquareDownRightLightIcon } from "../light";
import { ArrowSquareDownRightRegularIcon } from "../regular";
import { ArrowSquareDownRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowSquareDownRightIcon = memo(function ArrowSquareDownRight(
  props: IconWrapperProps
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
