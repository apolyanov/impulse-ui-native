import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BirdBoldIcon } from "../bold/bird-bold.icon";
import { BirdDuotoneIcon } from "../duotone/bird-duotone.icon";
import { BirdFillIcon } from "../fill/bird-fill.icon";
import { BirdLightIcon } from "../light/bird-light.icon";
import { BirdRegularIcon } from "../regular/bird-regular.icon";
import { BirdThinIcon } from "../thin/bird-thin.icon";

export const BirdIcon = memo(function Bird(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BirdBoldIcon,
      duotone: BirdDuotoneIcon,
      fill: BirdFillIcon,
      light: BirdLightIcon,
      regular: BirdRegularIcon,
      thin: BirdThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
