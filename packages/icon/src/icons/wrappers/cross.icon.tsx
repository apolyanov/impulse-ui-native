import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrossBoldIcon } from "../bold";
import { CrossDuotoneIcon } from "../duotone";
import { CrossFillIcon } from "../fill";
import { CrossLightIcon } from "../light";
import { CrossRegularIcon } from "../regular";
import { CrossThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
