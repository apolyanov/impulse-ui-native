import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PenBoldIcon } from "../bold";
import { PenDuotoneIcon } from "../duotone";
import { PenFillIcon } from "../fill";
import { PenLightIcon } from "../light";
import { PenRegularIcon } from "../regular";
import { PenThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
