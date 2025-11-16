import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EarBold } from "../bold";
import { EarDuotone } from "../duotone";
import { EarFill } from "../fill";
import { EarLight } from "../light";
import { EarRegular } from "../regular";
import { EarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Ear = memo(function Ear(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EarBold,
      duotone: EarDuotone,
      fill: EarFill,
      light: EarLight,
      regular: EarRegular,
      thin: EarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
