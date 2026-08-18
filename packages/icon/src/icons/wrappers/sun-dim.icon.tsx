import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SunDimBoldIcon } from "../bold/sun-dim-bold.icon";
import { SunDimDuotoneIcon } from "../duotone/sun-dim-duotone.icon";
import { SunDimFillIcon } from "../fill/sun-dim-fill.icon";
import { SunDimLightIcon } from "../light/sun-dim-light.icon";
import { SunDimRegularIcon } from "../regular/sun-dim-regular.icon";
import { SunDimThinIcon } from "../thin/sun-dim-thin.icon";

export const SunDimIcon = memo(function SunDim(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunDimBoldIcon,
      duotone: SunDimDuotoneIcon,
      fill: SunDimFillIcon,
      light: SunDimLightIcon,
      regular: SunDimRegularIcon,
      thin: SunDimThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
