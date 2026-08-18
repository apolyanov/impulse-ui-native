import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CrossBoldIcon } from "../bold/cross-bold.icon";
import { CrossDuotoneIcon } from "../duotone/cross-duotone.icon";
import { CrossFillIcon } from "../fill/cross-fill.icon";
import { CrossLightIcon } from "../light/cross-light.icon";
import { CrossRegularIcon } from "../regular/cross-regular.icon";
import { CrossThinIcon } from "../thin/cross-thin.icon";

export const CrossIcon = memo(function Cross(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrossBoldIcon,
      duotone: CrossDuotoneIcon,
      fill: CrossFillIcon,
      light: CrossLightIcon,
      regular: CrossRegularIcon,
      thin: CrossThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
