import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubtractBold } from "../bold";
import { SubtractDuotone } from "../duotone";
import { SubtractFill } from "../fill";
import { SubtractLight } from "../light";
import { SubtractRegular } from "../regular";
import { SubtractThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Subtract = memo(function Subtract(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtractBold,
      duotone: SubtractDuotone,
      fill: SubtractFill,
      light: SubtractLight,
      regular: SubtractRegular,
      thin: SubtractThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
