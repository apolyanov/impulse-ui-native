import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MoonStarsBoldIcon } from "../bold";
import { MoonStarsDuotoneIcon } from "../duotone";
import { MoonStarsFillIcon } from "../fill";
import { MoonStarsLightIcon } from "../light";
import { MoonStarsRegularIcon } from "../regular";
import { MoonStarsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
