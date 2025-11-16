import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlashlightBold } from "../bold";
import { FlashlightDuotone } from "../duotone";
import { FlashlightFill } from "../fill";
import { FlashlightLight } from "../light";
import { FlashlightRegular } from "../regular";
import { FlashlightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Flashlight = memo(function Flashlight(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlashlightBold,
      duotone: FlashlightDuotone,
      fill: FlashlightFill,
      light: FlashlightLight,
      regular: FlashlightRegular,
      thin: FlashlightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
