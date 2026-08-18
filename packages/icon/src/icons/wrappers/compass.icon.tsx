import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CompassBoldIcon } from "../bold/compass-bold.icon";
import { CompassDuotoneIcon } from "../duotone/compass-duotone.icon";
import { CompassFillIcon } from "../fill/compass-fill.icon";
import { CompassLightIcon } from "../light/compass-light.icon";
import { CompassRegularIcon } from "../regular/compass-regular.icon";
import { CompassThinIcon } from "../thin/compass-thin.icon";

export const CompassIcon = memo(function Compass(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CompassBoldIcon,
      duotone: CompassDuotoneIcon,
      fill: CompassFillIcon,
      light: CompassLightIcon,
      regular: CompassRegularIcon,
      thin: CompassThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
