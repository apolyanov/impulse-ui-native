import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NutBoldIcon } from "../bold";
import { NutDuotoneIcon } from "../duotone";
import { NutFillIcon } from "../fill";
import { NutLightIcon } from "../light";
import { NutRegularIcon } from "../regular";
import { NutThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NutIcon = memo(function Nut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NutBoldIcon,
      duotone: NutDuotoneIcon,
      fill: NutFillIcon,
      light: NutLightIcon,
      regular: NutRegularIcon,
      thin: NutThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
