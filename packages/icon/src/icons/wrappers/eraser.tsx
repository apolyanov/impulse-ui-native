import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EraserBold } from "../bold";
import { EraserDuotone } from "../duotone";
import { EraserFill } from "../fill";
import { EraserLight } from "../light";
import { EraserRegular } from "../regular";
import { EraserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Eraser = memo(function Eraser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EraserBold,
      duotone: EraserDuotone,
      fill: EraserFill,
      light: EraserLight,
      regular: EraserRegular,
      thin: EraserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
