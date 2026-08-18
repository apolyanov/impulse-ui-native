import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PaperPlaneBoldIcon } from "../bold/paper-plane-bold.icon";
import { PaperPlaneDuotoneIcon } from "../duotone/paper-plane-duotone.icon";
import { PaperPlaneFillIcon } from "../fill/paper-plane-fill.icon";
import { PaperPlaneLightIcon } from "../light/paper-plane-light.icon";
import { PaperPlaneRegularIcon } from "../regular/paper-plane-regular.icon";
import { PaperPlaneThinIcon } from "../thin/paper-plane-thin.icon";

export const PaperPlaneIcon = memo(function PaperPlane(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PaperPlaneBoldIcon,
      duotone: PaperPlaneDuotoneIcon,
      fill: PaperPlaneFillIcon,
      light: PaperPlaneLightIcon,
      regular: PaperPlaneRegularIcon,
      thin: PaperPlaneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
