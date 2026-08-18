import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CompassRoseBoldIcon } from "../bold/compass-rose-bold.icon";
import { CompassRoseDuotoneIcon } from "../duotone/compass-rose-duotone.icon";
import { CompassRoseFillIcon } from "../fill/compass-rose-fill.icon";
import { CompassRoseLightIcon } from "../light/compass-rose-light.icon";
import { CompassRoseRegularIcon } from "../regular/compass-rose-regular.icon";
import { CompassRoseThinIcon } from "../thin/compass-rose-thin.icon";

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
