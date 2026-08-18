import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PerspectiveBoldIcon } from "../bold/perspective-bold.icon";
import { PerspectiveDuotoneIcon } from "../duotone/perspective-duotone.icon";
import { PerspectiveFillIcon } from "../fill/perspective-fill.icon";
import { PerspectiveLightIcon } from "../light/perspective-light.icon";
import { PerspectiveRegularIcon } from "../regular/perspective-regular.icon";
import { PerspectiveThinIcon } from "../thin/perspective-thin.icon";

export const PerspectiveIcon = memo(function Perspective(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PerspectiveBoldIcon,
      duotone: PerspectiveDuotoneIcon,
      fill: PerspectiveFillIcon,
      light: PerspectiveLightIcon,
      regular: PerspectiveRegularIcon,
      thin: PerspectiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
