import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HairDryerBold } from "../bold";
import { HairDryerDuotone } from "../duotone";
import { HairDryerFill } from "../fill";
import { HairDryerLight } from "../light";
import { HairDryerRegular } from "../regular";
import { HairDryerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HairDryer = memo(function HairDryer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HairDryerBold,
      duotone: HairDryerDuotone,
      fill: HairDryerFill,
      light: HairDryerLight,
      regular: HairDryerRegular,
      thin: HairDryerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
