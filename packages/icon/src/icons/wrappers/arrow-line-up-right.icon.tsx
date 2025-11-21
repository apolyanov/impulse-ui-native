import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineUpRightBoldIcon } from "../bold";
import { ArrowLineUpRightDuotoneIcon } from "../duotone";
import { ArrowLineUpRightFillIcon } from "../fill";
import { ArrowLineUpRightLightIcon } from "../light";
import { ArrowLineUpRightRegularIcon } from "../regular";
import { ArrowLineUpRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineUpRightIcon = memo(function ArrowLineUpRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineUpRightBoldIcon,
      duotone: ArrowLineUpRightDuotoneIcon,
      fill: ArrowLineUpRightFillIcon,
      light: ArrowLineUpRightLightIcon,
      regular: ArrowLineUpRightRegularIcon,
      thin: ArrowLineUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
