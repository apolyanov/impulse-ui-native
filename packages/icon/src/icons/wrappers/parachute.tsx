import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ParachuteBold } from "../bold";
import { ParachuteDuotone } from "../duotone";
import { ParachuteFill } from "../fill";
import { ParachuteLight } from "../light";
import { ParachuteRegular } from "../regular";
import { ParachuteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Parachute = memo(function Parachute(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParachuteBold,
      duotone: ParachuteDuotone,
      fill: ParachuteFill,
      light: ParachuteLight,
      regular: ParachuteRegular,
      thin: ParachuteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
