import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CompassBoldIcon } from "../bold";
import { CompassDuotoneIcon } from "../duotone";
import { CompassFillIcon } from "../fill";
import { CompassLightIcon } from "../light";
import { CompassRegularIcon } from "../regular";
import { CompassThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
