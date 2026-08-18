import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PopcornBoldIcon } from "../bold/popcorn-bold.icon";
import { PopcornDuotoneIcon } from "../duotone/popcorn-duotone.icon";
import { PopcornFillIcon } from "../fill/popcorn-fill.icon";
import { PopcornLightIcon } from "../light/popcorn-light.icon";
import { PopcornRegularIcon } from "../regular/popcorn-regular.icon";
import { PopcornThinIcon } from "../thin/popcorn-thin.icon";

export const PopcornIcon = memo(function Popcorn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PopcornBoldIcon,
      duotone: PopcornDuotoneIcon,
      fill: PopcornFillIcon,
      light: PopcornLightIcon,
      regular: PopcornRegularIcon,
      thin: PopcornThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
