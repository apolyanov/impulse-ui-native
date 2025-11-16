import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaperPlaneTiltBold } from "../bold";
import { PaperPlaneTiltDuotone } from "../duotone";
import { PaperPlaneTiltFill } from "../fill";
import { PaperPlaneTiltLight } from "../light";
import { PaperPlaneTiltRegular } from "../regular";
import { PaperPlaneTiltThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaperPlaneTilt = memo(function PaperPlaneTilt(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperPlaneTiltBold,
      duotone: PaperPlaneTiltDuotone,
      fill: PaperPlaneTiltFill,
      light: PaperPlaneTiltLight,
      regular: PaperPlaneTiltRegular,
      thin: PaperPlaneTiltThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
