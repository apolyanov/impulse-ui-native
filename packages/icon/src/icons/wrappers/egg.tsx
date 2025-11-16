import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EggBold } from "../bold";
import { EggDuotone } from "../duotone";
import { EggFill } from "../fill";
import { EggLight } from "../light";
import { EggRegular } from "../regular";
import { EggThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Egg = memo(function Egg(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EggBold,
      duotone: EggDuotone,
      fill: EggFill,
      light: EggLight,
      regular: EggRegular,
      thin: EggThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
