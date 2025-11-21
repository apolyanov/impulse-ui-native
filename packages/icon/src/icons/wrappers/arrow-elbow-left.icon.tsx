import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowLeftBoldIcon } from "../bold";
import { ArrowElbowLeftDuotoneIcon } from "../duotone";
import { ArrowElbowLeftFillIcon } from "../fill";
import { ArrowElbowLeftLightIcon } from "../light";
import { ArrowElbowLeftRegularIcon } from "../regular";
import { ArrowElbowLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowLeftIcon = memo(function ArrowElbowLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowLeftBoldIcon,
      duotone: ArrowElbowLeftDuotoneIcon,
      fill: ArrowElbowLeftFillIcon,
      light: ArrowElbowLeftLightIcon,
      regular: ArrowElbowLeftRegularIcon,
      thin: ArrowElbowLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
