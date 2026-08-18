import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandWavingBoldIcon } from "../bold/hand-waving-bold.icon";
import { HandWavingDuotoneIcon } from "../duotone/hand-waving-duotone.icon";
import { HandWavingFillIcon } from "../fill/hand-waving-fill.icon";
import { HandWavingLightIcon } from "../light/hand-waving-light.icon";
import { HandWavingRegularIcon } from "../regular/hand-waving-regular.icon";
import { HandWavingThinIcon } from "../thin/hand-waving-thin.icon";

export const HandWavingIcon = memo(function HandWaving(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandWavingBoldIcon,
      duotone: HandWavingDuotoneIcon,
      fill: HandWavingFillIcon,
      light: HandWavingLightIcon,
      regular: HandWavingRegularIcon,
      thin: HandWavingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
