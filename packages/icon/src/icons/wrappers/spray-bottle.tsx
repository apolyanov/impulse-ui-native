import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SprayBottleBold } from "../bold";
import { SprayBottleDuotone } from "../duotone";
import { SprayBottleFill } from "../fill";
import { SprayBottleLight } from "../light";
import { SprayBottleRegular } from "../regular";
import { SprayBottleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SprayBottle = memo(function SprayBottle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SprayBottleBold,
      duotone: SprayBottleDuotone,
      fill: SprayBottleFill,
      light: SprayBottleLight,
      regular: SprayBottleRegular,
      thin: SprayBottleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
