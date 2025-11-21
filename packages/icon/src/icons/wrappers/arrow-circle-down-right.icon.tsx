import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleDownRightBoldIcon } from "../bold";
import { ArrowCircleDownRightDuotoneIcon } from "../duotone";
import { ArrowCircleDownRightFillIcon } from "../fill";
import { ArrowCircleDownRightLightIcon } from "../light";
import { ArrowCircleDownRightRegularIcon } from "../regular";
import { ArrowCircleDownRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleDownRightIcon = memo(function ArrowCircleDownRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleDownRightBoldIcon,
      duotone: ArrowCircleDownRightDuotoneIcon,
      fill: ArrowCircleDownRightFillIcon,
      light: ArrowCircleDownRightLightIcon,
      regular: ArrowCircleDownRightRegularIcon,
      thin: ArrowCircleDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
