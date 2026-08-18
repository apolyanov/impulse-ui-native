import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WarningCircleBoldIcon } from "../bold/warning-circle-bold.icon";
import { WarningCircleDuotoneIcon } from "../duotone/warning-circle-duotone.icon";
import { WarningCircleFillIcon } from "../fill/warning-circle-fill.icon";
import { WarningCircleLightIcon } from "../light/warning-circle-light.icon";
import { WarningCircleRegularIcon } from "../regular/warning-circle-regular.icon";
import { WarningCircleThinIcon } from "../thin/warning-circle-thin.icon";

export const WarningCircleIcon = memo(function WarningCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningCircleBoldIcon,
      duotone: WarningCircleDuotoneIcon,
      fill: WarningCircleFillIcon,
      light: WarningCircleLightIcon,
      regular: WarningCircleRegularIcon,
      thin: WarningCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
