import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilRulerBold } from "../bold";
import { PencilRulerDuotone } from "../duotone";
import { PencilRulerFill } from "../fill";
import { PencilRulerLight } from "../light";
import { PencilRulerRegular } from "../regular";
import { PencilRulerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilRuler = memo(function PencilRuler(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilRulerBold,
      duotone: PencilRulerDuotone,
      fill: PencilRulerFill,
      light: PencilRulerLight,
      regular: PencilRulerRegular,
      thin: PencilRulerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
