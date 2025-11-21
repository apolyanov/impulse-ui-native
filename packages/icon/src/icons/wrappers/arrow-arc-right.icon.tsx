import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowArcRightBoldIcon } from "../bold";
import { ArrowArcRightDuotoneIcon } from "../duotone";
import { ArrowArcRightFillIcon } from "../fill";
import { ArrowArcRightLightIcon } from "../light";
import { ArrowArcRightRegularIcon } from "../regular";
import { ArrowArcRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowArcRightIcon = memo(function ArrowArcRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowArcRightBoldIcon,
      duotone: ArrowArcRightDuotoneIcon,
      fill: ArrowArcRightFillIcon,
      light: ArrowArcRightLightIcon,
      regular: ArrowArcRightRegularIcon,
      thin: ArrowArcRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
