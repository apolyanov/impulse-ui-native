import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SprayBottleBoldIcon } from "../bold";
import { SprayBottleDuotoneIcon } from "../duotone";
import { SprayBottleFillIcon } from "../fill";
import { SprayBottleLightIcon } from "../light";
import { SprayBottleRegularIcon } from "../regular";
import { SprayBottleThinIcon } from "../thin";

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
