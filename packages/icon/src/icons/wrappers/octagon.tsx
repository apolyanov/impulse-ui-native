import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OctagonBold } from "../bold";
import { OctagonDuotone } from "../duotone";
import { OctagonFill } from "../fill";
import { OctagonLight } from "../light";
import { OctagonRegular } from "../regular";
import { OctagonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Octagon = memo(function Octagon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OctagonBold,
      duotone: OctagonDuotone,
      fill: OctagonFill,
      light: OctagonLight,
      regular: OctagonRegular,
      thin: OctagonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
