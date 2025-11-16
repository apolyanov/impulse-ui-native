import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircleNotchBold } from "../bold";
import { CircleNotchDuotone } from "../duotone";
import { CircleNotchFill } from "../fill";
import { CircleNotchLight } from "../light";
import { CircleNotchRegular } from "../regular";
import { CircleNotchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CircleNotch = memo(function CircleNotch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleNotchBold,
      duotone: CircleNotchDuotone,
      fill: CircleNotchFill,
      light: CircleNotchLight,
      regular: CircleNotchRegular,
      thin: CircleNotchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
