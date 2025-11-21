import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PopcornBoldIcon } from "../bold";
import { PopcornDuotoneIcon } from "../duotone";
import { PopcornFillIcon } from "../fill";
import { PopcornLightIcon } from "../light";
import { PopcornRegularIcon } from "../regular";
import { PopcornThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
