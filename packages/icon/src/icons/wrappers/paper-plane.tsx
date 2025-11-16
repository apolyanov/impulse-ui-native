import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaperPlaneBold } from "../bold";
import { PaperPlaneDuotone } from "../duotone";
import { PaperPlaneFill } from "../fill";
import { PaperPlaneLight } from "../light";
import { PaperPlaneRegular } from "../regular";
import { PaperPlaneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaperPlane = memo(function PaperPlane(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperPlaneBold,
      duotone: PaperPlaneDuotone,
      fill: PaperPlaneFill,
      light: PaperPlaneLight,
      regular: PaperPlaneRegular,
      thin: PaperPlaneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
