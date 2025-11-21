import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleRightBoldIcon } from "../bold";
import { ArrowCircleRightDuotoneIcon } from "../duotone";
import { ArrowCircleRightFillIcon } from "../fill";
import { ArrowCircleRightLightIcon } from "../light";
import { ArrowCircleRightRegularIcon } from "../regular";
import { ArrowCircleRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleRightIcon = memo(function ArrowCircleRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleRightBoldIcon,
      duotone: ArrowCircleRightDuotoneIcon,
      fill: ArrowCircleRightFillIcon,
      light: ArrowCircleRightLightIcon,
      regular: ArrowCircleRightRegularIcon,
      thin: ArrowCircleRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
