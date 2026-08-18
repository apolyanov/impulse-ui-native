import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GearSixBoldIcon } from "../bold/gear-six-bold.icon";
import { GearSixDuotoneIcon } from "../duotone/gear-six-duotone.icon";
import { GearSixFillIcon } from "../fill/gear-six-fill.icon";
import { GearSixLightIcon } from "../light/gear-six-light.icon";
import { GearSixRegularIcon } from "../regular/gear-six-regular.icon";
import { GearSixThinIcon } from "../thin/gear-six-thin.icon";

export const GearSixIcon = memo(function GearSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GearSixBoldIcon,
      duotone: GearSixDuotoneIcon,
      fill: GearSixFillIcon,
      light: GearSixLightIcon,
      regular: GearSixRegularIcon,
      thin: GearSixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
