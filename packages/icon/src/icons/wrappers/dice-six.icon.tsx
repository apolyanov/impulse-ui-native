import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceSixBoldIcon } from "../bold/dice-six-bold.icon";
import { DiceSixDuotoneIcon } from "../duotone/dice-six-duotone.icon";
import { DiceSixFillIcon } from "../fill/dice-six-fill.icon";
import { DiceSixLightIcon } from "../light/dice-six-light.icon";
import { DiceSixRegularIcon } from "../regular/dice-six-regular.icon";
import { DiceSixThinIcon } from "../thin/dice-six-thin.icon";

export const DiceSixIcon = memo(function DiceSix(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceSixBoldIcon,
      duotone: DiceSixDuotoneIcon,
      fill: DiceSixFillIcon,
      light: DiceSixLightIcon,
      regular: DiceSixRegularIcon,
      thin: DiceSixThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
