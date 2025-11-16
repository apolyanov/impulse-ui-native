import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScalesBold } from "../bold";
import { ScalesDuotone } from "../duotone";
import { ScalesFill } from "../fill";
import { ScalesLight } from "../light";
import { ScalesRegular } from "../regular";
import { ScalesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Scales = memo(function Scales(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScalesBold,
      duotone: ScalesDuotone,
      fill: ScalesFill,
      light: ScalesLight,
      regular: ScalesRegular,
      thin: ScalesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
