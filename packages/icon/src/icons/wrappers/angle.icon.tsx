import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AngleBoldIcon } from "../bold/angle-bold.icon";
import { AngleDuotoneIcon } from "../duotone/angle-duotone.icon";
import { AngleFillIcon } from "../fill/angle-fill.icon";
import { AngleLightIcon } from "../light/angle-light.icon";
import { AngleRegularIcon } from "../regular/angle-regular.icon";
import { AngleThinIcon } from "../thin/angle-thin.icon";

export const AngleIcon = memo(function Angle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AngleBoldIcon,
      duotone: AngleDuotoneIcon,
      fill: AngleFillIcon,
      light: AngleLightIcon,
      regular: AngleRegularIcon,
      thin: AngleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
