import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DetectiveBoldIcon } from "../bold/detective-bold.icon";
import { DetectiveDuotoneIcon } from "../duotone/detective-duotone.icon";
import { DetectiveFillIcon } from "../fill/detective-fill.icon";
import { DetectiveLightIcon } from "../light/detective-light.icon";
import { DetectiveRegularIcon } from "../regular/detective-regular.icon";
import { DetectiveThinIcon } from "../thin/detective-thin.icon";

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
