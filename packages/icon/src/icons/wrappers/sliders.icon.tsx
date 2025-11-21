import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SlidersBoldIcon } from "../bold";
import { SlidersDuotoneIcon } from "../duotone";
import { SlidersFillIcon } from "../fill";
import { SlidersLightIcon } from "../light";
import { SlidersRegularIcon } from "../regular";
import { SlidersThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
