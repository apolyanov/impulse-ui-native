import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RulerBold } from "../bold";
import { RulerDuotone } from "../duotone";
import { RulerFill } from "../fill";
import { RulerLight } from "../light";
import { RulerRegular } from "../regular";
import { RulerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Ruler = memo(function Ruler(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RulerBold,
      duotone: RulerDuotone,
      fill: RulerFill,
      light: RulerLight,
      regular: RulerRegular,
      thin: RulerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
