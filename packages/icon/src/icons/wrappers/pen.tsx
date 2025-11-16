import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PenBold } from "../bold";
import { PenDuotone } from "../duotone";
import { PenFill } from "../fill";
import { PenLight } from "../light";
import { PenRegular } from "../regular";
import { PenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pen = memo(function Pen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PenBold,
      duotone: PenDuotone,
      fill: PenFill,
      light: PenLight,
      regular: PenRegular,
      thin: PenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
