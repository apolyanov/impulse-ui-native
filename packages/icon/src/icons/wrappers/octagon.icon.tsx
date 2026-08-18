import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { OctagonBoldIcon } from "../bold/octagon-bold.icon";
import { OctagonDuotoneIcon } from "../duotone/octagon-duotone.icon";
import { OctagonFillIcon } from "../fill/octagon-fill.icon";
import { OctagonLightIcon } from "../light/octagon-light.icon";
import { OctagonRegularIcon } from "../regular/octagon-regular.icon";
import { OctagonThinIcon } from "../thin/octagon-thin.icon";

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
