import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HorseBoldIcon } from "../bold/horse-bold.icon";
import { HorseDuotoneIcon } from "../duotone/horse-duotone.icon";
import { HorseFillIcon } from "../fill/horse-fill.icon";
import { HorseLightIcon } from "../light/horse-light.icon";
import { HorseRegularIcon } from "../regular/horse-regular.icon";
import { HorseThinIcon } from "../thin/horse-thin.icon";

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
