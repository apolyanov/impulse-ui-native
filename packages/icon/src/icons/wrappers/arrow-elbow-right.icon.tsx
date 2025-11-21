import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowRightBoldIcon } from "../bold";
import { ArrowElbowRightDuotoneIcon } from "../duotone";
import { ArrowElbowRightFillIcon } from "../fill";
import { ArrowElbowRightLightIcon } from "../light";
import { ArrowElbowRightRegularIcon } from "../regular";
import { ArrowElbowRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowRightIcon = memo(function ArrowElbowRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightBoldIcon,
      duotone: ArrowElbowRightDuotoneIcon,
      fill: ArrowElbowRightFillIcon,
      light: ArrowElbowRightLightIcon,
      regular: ArrowElbowRightRegularIcon,
      thin: ArrowElbowRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
