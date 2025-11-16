import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PeaceBold } from "../bold";
import { PeaceDuotone } from "../duotone";
import { PeaceFill } from "../fill";
import { PeaceLight } from "../light";
import { PeaceRegular } from "../regular";
import { PeaceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Peace = memo(function Peace(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PeaceBold,
      duotone: PeaceDuotone,
      fill: PeaceFill,
      light: PeaceLight,
      regular: PeaceRegular,
      thin: PeaceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
