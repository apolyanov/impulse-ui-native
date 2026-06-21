import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OctagonBoldIcon } from "../bold";
import { OctagonDuotoneIcon } from "../duotone";
import { OctagonFillIcon } from "../fill";
import { OctagonLightIcon } from "../light";
import { OctagonRegularIcon } from "../regular";
import { OctagonThinIcon } from "../thin";

export const OctagonIcon = memo(function Octagon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OctagonBoldIcon,
      duotone: OctagonDuotoneIcon,
      fill: OctagonFillIcon,
      light: OctagonLightIcon,
      regular: OctagonRegularIcon,
      thin: OctagonThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
