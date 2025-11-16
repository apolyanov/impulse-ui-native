import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DetectiveBold } from "../bold";
import { DetectiveDuotone } from "../duotone";
import { DetectiveFill } from "../fill";
import { DetectiveLight } from "../light";
import { DetectiveRegular } from "../regular";
import { DetectiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Detective = memo(function Detective(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DetectiveBold,
      duotone: DetectiveDuotone,
      fill: DetectiveFill,
      light: DetectiveLight,
      regular: DetectiveRegular,
      thin: DetectiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
