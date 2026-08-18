import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SlideshowBoldIcon } from "../bold/slideshow-bold.icon";
import { SlideshowDuotoneIcon } from "../duotone/slideshow-duotone.icon";
import { SlideshowFillIcon } from "../fill/slideshow-fill.icon";
import { SlideshowLightIcon } from "../light/slideshow-light.icon";
import { SlideshowRegularIcon } from "../regular/slideshow-regular.icon";
import { SlideshowThinIcon } from "../thin/slideshow-thin.icon";

export const SlideshowIcon = memo(function Slideshow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SlideshowBoldIcon,
      duotone: SlideshowDuotoneIcon,
      fill: SlideshowFillIcon,
      light: SlideshowLightIcon,
      regular: SlideshowRegularIcon,
      thin: SlideshowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
