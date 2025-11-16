import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SlideshowBold } from "../bold";
import { SlideshowDuotone } from "../duotone";
import { SlideshowFill } from "../fill";
import { SlideshowLight } from "../light";
import { SlideshowRegular } from "../regular";
import { SlideshowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Slideshow = memo(function Slideshow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlideshowBold,
      duotone: SlideshowDuotone,
      fill: SlideshowFill,
      light: SlideshowLight,
      regular: SlideshowRegular,
      thin: SlideshowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
