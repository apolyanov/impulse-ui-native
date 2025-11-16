import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaintRollerBold } from "../bold";
import { PaintRollerDuotone } from "../duotone";
import { PaintRollerFill } from "../fill";
import { PaintRollerLight } from "../light";
import { PaintRollerRegular } from "../regular";
import { PaintRollerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaintRoller = memo(function PaintRoller(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaintRollerBold,
      duotone: PaintRollerDuotone,
      fill: PaintRollerFill,
      light: PaintRollerLight,
      regular: PaintRollerRegular,
      thin: PaintRollerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
