import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PaperPlaneBoldIcon } from "../bold";
import { PaperPlaneDuotoneIcon } from "../duotone";
import { PaperPlaneFillIcon } from "../fill";
import { PaperPlaneLightIcon } from "../light";
import { PaperPlaneRegularIcon } from "../regular";
import { PaperPlaneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PaperPlaneIcon = memo(function PaperPlane(
  props: IconWrapperProps
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
