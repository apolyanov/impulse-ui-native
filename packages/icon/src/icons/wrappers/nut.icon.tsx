import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NutBoldIcon } from "../bold/nut-bold.icon";
import { NutDuotoneIcon } from "../duotone/nut-duotone.icon";
import { NutFillIcon } from "../fill/nut-fill.icon";
import { NutLightIcon } from "../light/nut-light.icon";
import { NutRegularIcon } from "../regular/nut-regular.icon";
import { NutThinIcon } from "../thin/nut-thin.icon";

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
