import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DiceFourBold } from "../bold";
import { DiceFourDuotone } from "../duotone";
import { DiceFourFill } from "../fill";
import { DiceFourLight } from "../light";
import { DiceFourRegular } from "../regular";
import { DiceFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DiceFour = memo(function DiceFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceFourBold,
      duotone: DiceFourDuotone,
      fill: DiceFourFill,
      light: DiceFourLight,
      regular: DiceFourRegular,
      thin: DiceFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
