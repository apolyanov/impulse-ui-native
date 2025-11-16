import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BarricadeBold } from "../bold";
import { BarricadeDuotone } from "../duotone";
import { BarricadeFill } from "../fill";
import { BarricadeLight } from "../light";
import { BarricadeRegular } from "../regular";
import { BarricadeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Barricade = memo(function Barricade(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarricadeBold,
      duotone: BarricadeDuotone,
      fill: BarricadeFill,
      light: BarricadeLight,
      regular: BarricadeRegular,
      thin: BarricadeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
