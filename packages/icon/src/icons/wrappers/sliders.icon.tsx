import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SlidersBoldIcon } from "../bold/sliders-bold.icon";
import { SlidersDuotoneIcon } from "../duotone/sliders-duotone.icon";
import { SlidersFillIcon } from "../fill/sliders-fill.icon";
import { SlidersLightIcon } from "../light/sliders-light.icon";
import { SlidersRegularIcon } from "../regular/sliders-regular.icon";
import { SlidersThinIcon } from "../thin/sliders-thin.icon";

export const SlidersIcon = memo(function Sliders(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlidersBoldIcon,
      duotone: SlidersDuotoneIcon,
      fill: SlidersFillIcon,
      light: SlidersLightIcon,
      regular: SlidersRegularIcon,
      thin: SlidersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
