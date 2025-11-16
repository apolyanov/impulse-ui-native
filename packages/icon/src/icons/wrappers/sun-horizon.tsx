import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SunHorizonBold } from "../bold";
import { SunHorizonDuotone } from "../duotone";
import { SunHorizonFill } from "../fill";
import { SunHorizonLight } from "../light";
import { SunHorizonRegular } from "../regular";
import { SunHorizonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SunHorizon = memo(function SunHorizon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SunHorizonBold,
      duotone: SunHorizonDuotone,
      fill: SunHorizonFill,
      light: SunHorizonLight,
      regular: SunHorizonRegular,
      thin: SunHorizonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
