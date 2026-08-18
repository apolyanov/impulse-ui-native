import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SprayBottleBoldIcon } from "../bold/spray-bottle-bold.icon";
import { SprayBottleDuotoneIcon } from "../duotone/spray-bottle-duotone.icon";
import { SprayBottleFillIcon } from "../fill/spray-bottle-fill.icon";
import { SprayBottleLightIcon } from "../light/spray-bottle-light.icon";
import { SprayBottleRegularIcon } from "../regular/spray-bottle-regular.icon";
import { SprayBottleThinIcon } from "../thin/spray-bottle-thin.icon";

export const SprayBottleIcon = memo(function SprayBottle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SprayBottleBoldIcon,
      duotone: SprayBottleDuotoneIcon,
      fill: SprayBottleFillIcon,
      light: SprayBottleLightIcon,
      regular: SprayBottleRegularIcon,
      thin: SprayBottleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
