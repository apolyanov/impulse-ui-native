import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MoonStarsBoldIcon } from "../bold/moon-stars-bold.icon";
import { MoonStarsDuotoneIcon } from "../duotone/moon-stars-duotone.icon";
import { MoonStarsFillIcon } from "../fill/moon-stars-fill.icon";
import { MoonStarsLightIcon } from "../light/moon-stars-light.icon";
import { MoonStarsRegularIcon } from "../regular/moon-stars-regular.icon";
import { MoonStarsThinIcon } from "../thin/moon-stars-thin.icon";

export const MoonStarsIcon = memo(function MoonStars(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MoonStarsBoldIcon,
      duotone: MoonStarsDuotoneIcon,
      fill: MoonStarsFillIcon,
      light: MoonStarsLightIcon,
      regular: MoonStarsRegularIcon,
      thin: MoonStarsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
