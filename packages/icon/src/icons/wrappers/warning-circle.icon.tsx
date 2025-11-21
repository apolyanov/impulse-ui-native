import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarningCircleBoldIcon } from "../bold";
import { WarningCircleDuotoneIcon } from "../duotone";
import { WarningCircleFillIcon } from "../fill";
import { WarningCircleLightIcon } from "../light";
import { WarningCircleRegularIcon } from "../regular";
import { WarningCircleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WarningCircleIcon = memo(function WarningCircle(
  props: IconWrapperProps
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
