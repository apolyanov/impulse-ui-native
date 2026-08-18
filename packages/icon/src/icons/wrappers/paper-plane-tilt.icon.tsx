import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaperPlaneTiltBoldIcon } from "../bold/paper-plane-tilt-bold.icon";
import { PaperPlaneTiltDuotoneIcon } from "../duotone/paper-plane-tilt-duotone.icon";
import { PaperPlaneTiltFillIcon } from "../fill/paper-plane-tilt-fill.icon";
import { PaperPlaneTiltLightIcon } from "../light/paper-plane-tilt-light.icon";
import { PaperPlaneTiltRegularIcon } from "../regular/paper-plane-tilt-regular.icon";
import { PaperPlaneTiltThinIcon } from "../thin/paper-plane-tilt-thin.icon";

export const PaperPlaneTiltIcon = memo(function PaperPlaneTilt(
  props: IconWrapperProps,
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
