import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowRightUpBoldIcon } from "../bold";
import { ArrowElbowRightUpDuotoneIcon } from "../duotone";
import { ArrowElbowRightUpFillIcon } from "../fill";
import { ArrowElbowRightUpLightIcon } from "../light";
import { ArrowElbowRightUpRegularIcon } from "../regular";
import { ArrowElbowRightUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowRightUpIcon = memo(function ArrowElbowRightUp(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightUpBoldIcon,
      duotone: ArrowElbowRightUpDuotoneIcon,
      fill: ArrowElbowRightUpFillIcon,
      light: ArrowElbowRightUpLightIcon,
      regular: ArrowElbowRightUpRegularIcon,
      thin: ArrowElbowRightUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
