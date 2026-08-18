import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PenBoldIcon } from "../bold/pen-bold.icon";
import { PenDuotoneIcon } from "../duotone/pen-duotone.icon";
import { PenFillIcon } from "../fill/pen-fill.icon";
import { PenLightIcon } from "../light/pen-light.icon";
import { PenRegularIcon } from "../regular/pen-regular.icon";
import { PenThinIcon } from "../thin/pen-thin.icon";

export const PenIcon = memo(function Pen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PenBoldIcon,
      duotone: PenDuotoneIcon,
      fill: PenFillIcon,
      light: PenLightIcon,
      regular: PenRegularIcon,
      thin: PenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
