import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiceFourBoldIcon } from "../bold/dice-four-bold.icon";
import { DiceFourDuotoneIcon } from "../duotone/dice-four-duotone.icon";
import { DiceFourFillIcon } from "../fill/dice-four-fill.icon";
import { DiceFourLightIcon } from "../light/dice-four-light.icon";
import { DiceFourRegularIcon } from "../regular/dice-four-regular.icon";
import { DiceFourThinIcon } from "../thin/dice-four-thin.icon";

export const DiceFourIcon = memo(function DiceFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiceFourBoldIcon,
      duotone: DiceFourDuotoneIcon,
      fill: DiceFourFillIcon,
      light: DiceFourLightIcon,
      regular: DiceFourRegularIcon,
      thin: DiceFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
