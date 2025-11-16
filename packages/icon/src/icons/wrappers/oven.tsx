import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OvenBold } from "../bold";
import { OvenDuotone } from "../duotone";
import { OvenFill } from "../fill";
import { OvenLight } from "../light";
import { OvenRegular } from "../regular";
import { OvenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Oven = memo(function Oven(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OvenBold,
      duotone: OvenDuotone,
      fill: OvenFill,
      light: OvenLight,
      regular: OvenRegular,
      thin: OvenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
