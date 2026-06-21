import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HorseBoldIcon } from "../bold";
import { HorseDuotoneIcon } from "../duotone";
import { HorseFillIcon } from "../fill";
import { HorseLightIcon } from "../light";
import { HorseRegularIcon } from "../regular";
import { HorseThinIcon } from "../thin";

export const HorseIcon = memo(function Horse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HorseBoldIcon,
      duotone: HorseDuotoneIcon,
      fill: HorseFillIcon,
      light: HorseLightIcon,
      regular: HorseRegularIcon,
      thin: HorseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
