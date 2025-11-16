import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarningCircleBold } from "../bold";
import { WarningCircleDuotone } from "../duotone";
import { WarningCircleFill } from "../fill";
import { WarningCircleLight } from "../light";
import { WarningCircleRegular } from "../regular";
import { WarningCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WarningCircle = memo(function WarningCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarningCircleBold,
      duotone: WarningCircleDuotone,
      fill: WarningCircleFill,
      light: WarningCircleLight,
      regular: WarningCircleRegular,
      thin: WarningCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
