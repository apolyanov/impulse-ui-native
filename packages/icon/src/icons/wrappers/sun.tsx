import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SunBold } from "../bold";
import { SunDuotone } from "../duotone";
import { SunFill } from "../fill";
import { SunLight } from "../light";
import { SunRegular } from "../regular";
import { SunThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sun = memo(function Sun(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunBold,
      duotone: SunDuotone,
      fill: SunFill,
      light: SunLight,
      regular: SunRegular,
      thin: SunThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
