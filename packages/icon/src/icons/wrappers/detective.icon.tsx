import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DetectiveBoldIcon } from "../bold";
import { DetectiveDuotoneIcon } from "../duotone";
import { DetectiveFillIcon } from "../fill";
import { DetectiveLightIcon } from "../light";
import { DetectiveRegularIcon } from "../regular";
import { DetectiveThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DetectiveIcon = memo(function Detective(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DetectiveBoldIcon,
      duotone: DetectiveDuotoneIcon,
      fill: DetectiveFillIcon,
      light: DetectiveLightIcon,
      regular: DetectiveRegularIcon,
      thin: DetectiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
