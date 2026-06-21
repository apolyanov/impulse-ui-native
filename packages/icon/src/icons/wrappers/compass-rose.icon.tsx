import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CompassRoseBoldIcon } from "../bold";
import { CompassRoseDuotoneIcon } from "../duotone";
import { CompassRoseFillIcon } from "../fill";
import { CompassRoseLightIcon } from "../light";
import { CompassRoseRegularIcon } from "../regular";
import { CompassRoseThinIcon } from "../thin";

export const CompassRoseIcon = memo(function CompassRose(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CompassRoseBoldIcon,
      duotone: CompassRoseDuotoneIcon,
      fill: CompassRoseFillIcon,
      light: CompassRoseLightIcon,
      regular: CompassRoseRegularIcon,
      thin: CompassRoseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
