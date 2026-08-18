import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CircleNotchBoldIcon } from "../bold/circle-notch-bold.icon";
import { CircleNotchDuotoneIcon } from "../duotone/circle-notch-duotone.icon";
import { CircleNotchFillIcon } from "../fill/circle-notch-fill.icon";
import { CircleNotchLightIcon } from "../light/circle-notch-light.icon";
import { CircleNotchRegularIcon } from "../regular/circle-notch-regular.icon";
import { CircleNotchThinIcon } from "../thin/circle-notch-thin.icon";

export const CircleNotchIcon = memo(function CircleNotch(
  props: IconWrapperProps,
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
