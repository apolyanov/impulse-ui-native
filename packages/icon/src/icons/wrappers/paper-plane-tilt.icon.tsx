import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaperPlaneTiltBoldIcon } from "../bold";
import { PaperPlaneTiltDuotoneIcon } from "../duotone";
import { PaperPlaneTiltFillIcon } from "../fill";
import { PaperPlaneTiltLightIcon } from "../light";
import { PaperPlaneTiltRegularIcon } from "../regular";
import { PaperPlaneTiltThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaperPlaneTiltIcon = memo(function PaperPlaneTilt(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperPlaneTiltBoldIcon,
      duotone: PaperPlaneTiltDuotoneIcon,
      fill: PaperPlaneTiltFillIcon,
      light: PaperPlaneTiltLightIcon,
      regular: PaperPlaneTiltRegularIcon,
      thin: PaperPlaneTiltThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
