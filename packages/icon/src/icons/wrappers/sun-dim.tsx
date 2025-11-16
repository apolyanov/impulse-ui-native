import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SunDimBold } from "../bold";
import { SunDimDuotone } from "../duotone";
import { SunDimFill } from "../fill";
import { SunDimLight } from "../light";
import { SunDimRegular } from "../regular";
import { SunDimThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SunDim = memo(function SunDim(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunDimBold,
      duotone: SunDimDuotone,
      fill: SunDimFill,
      light: SunDimLight,
      regular: SunDimRegular,
      thin: SunDimThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
