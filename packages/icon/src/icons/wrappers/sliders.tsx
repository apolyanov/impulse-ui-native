import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SlidersBold } from "../bold";
import { SlidersDuotone } from "../duotone";
import { SlidersFill } from "../fill";
import { SlidersLight } from "../light";
import { SlidersRegular } from "../regular";
import { SlidersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Sliders = memo(function Sliders(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlidersBold,
      duotone: SlidersDuotone,
      fill: SlidersFill,
      light: SlidersLight,
      regular: SlidersRegular,
      thin: SlidersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
