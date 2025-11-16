import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CompassBold } from "../bold";
import { CompassDuotone } from "../duotone";
import { CompassFill } from "../fill";
import { CompassLight } from "../light";
import { CompassRegular } from "../regular";
import { CompassThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Compass = memo(function Compass(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CompassBold,
      duotone: CompassDuotone,
      fill: CompassFill,
      light: CompassLight,
      regular: CompassRegular,
      thin: CompassThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
