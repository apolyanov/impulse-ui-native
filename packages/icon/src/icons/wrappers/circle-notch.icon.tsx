import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircleNotchBoldIcon } from "../bold";
import { CircleNotchDuotoneIcon } from "../duotone";
import { CircleNotchFillIcon } from "../fill";
import { CircleNotchLightIcon } from "../light";
import { CircleNotchRegularIcon } from "../regular";
import { CircleNotchThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CircleNotchIcon = memo(function CircleNotch(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleNotchBoldIcon,
      duotone: CircleNotchDuotoneIcon,
      fill: CircleNotchFillIcon,
      light: CircleNotchLightIcon,
      regular: CircleNotchRegularIcon,
      thin: CircleNotchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
